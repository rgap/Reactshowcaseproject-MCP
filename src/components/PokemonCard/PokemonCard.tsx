import { Pokemon } from "../../types/pokemon";
import { PokemonType } from "../PokemonType";
import { useI18n } from "../../hooks/useI18n";
import { cx } from "../../utils/cx";
import styles from "./PokemonCard.module.css";

interface IPokemonCard {
  pokemon: Pokemon;
  size?: "large" | "small";
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  onClick?: () => void;
}

// Weight icon SVG
function WeightIcon() {
  return (
    <svg className={styles["pokemon-card__stat-icon"]} fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#weight-clip)">
        <path
          d="M14 6H13.25L11 1H5L2.75 6H2C0.9 6 0 6.9 0 8V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V8C16 6.9 15.1 6 14 6ZM6.25 2H9.75L11.25 6H4.75L6.25 2ZM14 14H2V8H14V14ZM8 9C6.9 9 6 9.9 6 11C6 12.1 6.9 13 8 13C9.1 13 10 12.1 10 11C10 9.9 9.1 9 8 9Z"
          fill="#0F172A"
        />
      </g>
      <defs>
        <clipPath id="weight-clip">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Height icon SVG
function HeightIcon() {
  return (
    <svg className={styles["pokemon-card__stat-icon"]} fill="none" viewBox="0 0 8 16">
      <g clipPath="url(#height-clip)">
        <path
          d="M4 0L0 4H3V12H0L4 16L8 12H5V4H8L4 0Z"
          fill="#0F172A"
        />
      </g>
      <defs>
        <clipPath id="height-clip">
          <rect fill="white" height="16" width="8" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Heart icon SVG
function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={styles["pokemon-card__favorite-icon"]} fill="none" viewBox="0 0 24 24">
      <rect fill="white" height="24" width="24" />
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z"
        fill={filled ? "#3B76F6" : "none"}
        stroke="#3B76F6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PokemonCard({
  pokemon,
  size = "small",
  onToggleFavorite,
  isFavorite = false,
  onClick,
}: IPokemonCard) {
  const { t } = useI18n();
  const isLarge = size === "large";

  const handleCardClick = () => {
    if (!isLarge && onClick) {
      onClick();
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.();
  };

  return (
    <div
      className={cx(
        styles["pokemon-card"],
        isLarge
          ? styles["pokemon-card--large"]
          : styles["pokemon-card--small"]
      )}
      onClick={handleCardClick}
    >
      <div className={styles["pokemon-card__header"]}>
        <p
          className={cx(
            styles["pokemon-card__name"],
            isLarge
              ? styles["pokemon-card__name--large"]
              : styles["pokemon-card__name--small"]
          )}
        >
          {pokemon.name}
        </p>
        <p className={styles["pokemon-card__id"]}>
          #{String(pokemon.id).padStart(3, "0")}
        </p>
      </div>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className={cx(
          styles["pokemon-card__image"],
          isLarge && styles["pokemon-card__image--large"]
        )}
      />

      <div className={styles["pokemon-card__types"]}>
        {pokemon.types.map((type, index) => (
          <PokemonType key={index} type={type.type.name} />
        ))}
      </div>

      {isLarge && (
        <>
          <div className={styles["pokemon-card__stats"]}>
            <div className={styles["pokemon-card__stat"]}>
              <div className={styles["pokemon-card__stat-value"]}>
                <WeightIcon />
                <p className={styles["pokemon-card__stat-text"]}>
                  {(pokemon.weight / 10).toFixed(1)} kg
                </p>
              </div>
              <p className={styles["pokemon-card__stat-label"]}>
                {t("pokemon-weight")}
              </p>
            </div>

            <div className={styles["pokemon-card__divider"]} />

            <div className={styles["pokemon-card__stat"]}>
              <div className={styles["pokemon-card__stat-value"]}>
                <HeightIcon />
                <p className={styles["pokemon-card__stat-text"]}>
                  {(pokemon.height / 10).toFixed(1)} m
                </p>
              </div>
              <p className={styles["pokemon-card__stat-label"]}>
                {t("pokemon-height")}
              </p>
            </div>
          </div>

          {onToggleFavorite && (
            <button
              className={styles["pokemon-card__favorite-button"]}
              onClick={handleFavoriteClick}
            >
              <HeartIcon filled={isFavorite} />
              <p className={styles["pokemon-card__favorite-text"]}>
                {isFavorite
                  ? t("pokemon-remove-favorite")
                  : t("pokemon-add-favorite")}
              </p>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export { PokemonCard };

