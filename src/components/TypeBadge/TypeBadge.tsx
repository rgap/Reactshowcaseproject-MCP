import styles from "./TypeBadge.module.css";
import { getPokemonTypeColor } from "../../utils/pokemonHelpers";

interface ITypeBadge {
  type: string;
}

function TypeBadge({ type }: ITypeBadge) {
  const backgroundColor = getPokemonTypeColor(type);

  return (
    <div className={styles["type-badge"]} style={{ backgroundColor }}>
      {type}
    </div>
  );
}

export { TypeBadge };

