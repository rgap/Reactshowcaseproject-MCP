import { TYPE_COLORS } from "./PokemonType.constants";
import styles from "./PokemonType.module.css";

interface IPokemonType {
  type: string;
}

function PokemonType({ type }: IPokemonType) {
  const backgroundColor = TYPE_COLORS[type.toLowerCase()] || "#a8a878";

  return (
    <div className={styles["pokemon-type"]} style={{ backgroundColor }}>
      <p className={styles["pokemon-type__text"]}>{type}</p>
    </div>
  );
}

export { PokemonType };
export { TYPE_COLORS } from "./PokemonType.constants";

