import { useState, useEffect, FormEvent } from "react";
import { Header, Input, Button, PokemonCard } from "../../components";
import { useI18n } from "../../hooks/useI18n";
import { fetchPokemon } from "../../services/pokemonApi";
import {
  addFavoritePokemon,
  removeFavoritePokemon,
  getFavoritePokemon,
} from "../../services/favoriteApi";
import { Pokemon } from "../../types/pokemon";
import styles from "./PokeCollectionPage.module.css";

const USER_STORAGE_KEY = "poke-collection-user";

function PokeCollectionPage() {
  const { t } = useI18n();
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  // Check for stored username on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUsername) {
      setUsername(storedUsername);
      validateAndLogin(storedUsername);
    }
  }, []);

  // Validate user and login
  const validateAndLogin = async (user: string) => {
    try {
      await getFavoritePokemon(user);
      setIsLoggedIn(true);
    } catch (err: unknown) {
      if (err instanceof Error && err.message === "USER_NOT_FOUND") {
        localStorage.removeItem(USER_STORAGE_KEY);
        setLoginError(t("pokemon-user-not-found"));
        setIsLoggedIn(false);
      }
    }
  };

  // Load favorites when logged in
  useEffect(() => {
    if (isLoggedIn && username) {
      loadFavorites();
    }
  }, [isLoggedIn, username]);

  const loadFavorites = async () => {
    try {
      const pokemonData = await getFavoritePokemon(username);
      setFavorites(pokemonData);
    } catch (err) {
      console.error("Error loading favorites:", err);
      setFavorites([]);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoginLoading(true);
    setLoginError("");

    try {
      await getFavoritePokemon(username.trim());
      localStorage.setItem(USER_STORAGE_KEY, username.trim());
      setIsLoggedIn(true);
    } catch (err: unknown) {
      if (err instanceof Error && err.message === "USER_NOT_FOUND") {
        setLoginError(t("pokemon-user-not-found"));
      } else {
        setLoginError("An error occurred. Please try again.");
      }
    } finally {
      setIsLoginLoading(false);
    }
  };

  const handleExit = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUsername("");
    setIsLoggedIn(false);
    setCurrentPokemon(null);
    setFavorites([]);
    setSearchQuery("");
    setError("");
    setLoginError("");
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const pokemon = await fetchPokemon(searchQuery.toLowerCase().trim());
      setCurrentPokemon(pokemon);
    } catch (err) {
      setError(t("pokemon-not-found"));
      setCurrentPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = async (pokemon: Pokemon) => {
    const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

    try {
      if (isFavorite) {
        await removeFavoritePokemon(username, pokemon.id);
        setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
      } else {
        await addFavoritePokemon(username, pokemon);
        setFavorites([...favorites, pokemon]);
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  const handleFavoriteCardClick = (pokemon: Pokemon) => {
    setCurrentPokemon(pokemon);
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className={styles["poke-collection-login"]}>
        <div className={styles["poke-collection-login__container"]}>
          <h1 className={styles["poke-collection-login__title"]}>
            {t("pokemon-title")}
          </h1>
          <form
            className={styles["poke-collection-login__form"]}
            onSubmit={handleLogin}
          >
            <Input
              type="text"
              placeholder={t("pokemon-username-placeholder")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={loginError}
              disabled={isLoginLoading}
              required
            />
            <Button
              type="submit"
              intent="primary"
              fullWidth
              disabled={isLoginLoading}
            >
              {isLoginLoading ? t("pokemon-loading") : t("pokemon-enter")}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Main Screen
  return (
    <div className={styles["poke-collection"]}>
      <Header showBadge badgeText="Project 02" />
      <main className={styles["poke-collection__main"]}>
        <section className={styles["poke-collection__section"]}>
          <h2 className={styles["poke-collection__title"]}>
            {t("pokemon-search")}
          </h2>
          <form
            className={styles["poke-collection__search-form"]}
            onSubmit={handleSearch}
          >
            <div className={styles["poke-collection__search-input"]}>
              <Input
                type="text"
                placeholder={t("pokemon-search-placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button type="submit" intent="primary" disabled={isLoading}>
              {t("pokemon-search")}
            </Button>
          </form>

          <div className={styles["poke-collection__pokemon-display"]}>
            {isLoading ? (
              <p className={styles["poke-collection__message"]}>
                {t("pokemon-loading")}
              </p>
            ) : error ? (
              <p className={styles["poke-collection__message"]}>{error}</p>
            ) : currentPokemon ? (
              <PokemonCard
                pokemon={currentPokemon}
                size="large"
                onToggleFavorite={() => handleToggleFavorite(currentPokemon)}
                isFavorite={favorites.some(
                  (fav) => fav.id === currentPokemon.id
                )}
              />
            ) : null}
          </div>
        </section>

        <section className={styles["poke-collection__favorites"]}>
          <h2 className={styles["poke-collection__title"]}>
            {t("pokemon-favorites")}
          </h2>
          {favorites.length === 0 ? (
            <div className={styles["poke-collection__favorites-empty"]}>
              <p className={styles["poke-collection__message"]}>
                {t("pokemon-no-favorites")}
              </p>
            </div>
          ) : (
            <div className={styles["poke-collection__favorites-grid"]}>
              {favorites.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  size="small"
                  onClick={() => handleFavoriteCardClick(pokemon)}
                />
              ))}
            </div>
          )}
        </section>

        <Button
          intent="danger"
          onClick={handleExit}
          className={styles["poke-collection__exit-button"]}
        >
          {t("pokemon-exit")}
        </Button>
      </main>
    </div>
  );
}

export { PokeCollectionPage };
