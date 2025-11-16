import type { PokemonType } from "../types/pokemon";

export function getPokemonTypeColor(type: string): string {
  const typeMap: Record<string, string> = {
    normal: "var(--type-normal)",
    fighting: "var(--type-fighting)",
    flying: "var(--type-flying)",
    poison: "var(--type-poison)",
    ground: "var(--type-ground)",
    rock: "var(--type-rock)",
    bug: "var(--type-bug)",
    ghost: "var(--type-ghost)",
    steel: "var(--type-steel)",
    fire: "var(--type-fire)",
    water: "var(--type-water)",
    grass: "var(--type-grass)",
    electric: "var(--type-electric)",
    psychic: "var(--type-psychic)",
    ice: "var(--type-ice)",
    dragon: "var(--type-dragon)",
    dark: "var(--type-dark)",
    fairy: "var(--type-fairy)",
    unknown: "var(--type-unknown)",
  };

  return typeMap[type.toLowerCase()] || typeMap.unknown;
}

export function formatPokemonId(id: number | undefined): string {
  if (!id) return "#???";
  return `#${String(id).padStart(3, "0")}`;
}

export function formatWeight(weight: number): string {
  // Weight is in hectograms, convert to kg
  return `${(weight / 10).toFixed(1)} kg`;
}

export function formatHeight(height: number): string {
  // Height is in decimeters, convert to meters
  return `${(height / 10).toFixed(1)} m`;
}

export function capitalizeName(name: string): string {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

