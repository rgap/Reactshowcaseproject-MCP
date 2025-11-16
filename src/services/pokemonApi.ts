import { Pokemon } from "../types/pokemon";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon(nameOrId: string): Promise<Pokemon> {
  const response = await fetch(
    `${POKEAPI_BASE_URL}/pokemon/${nameOrId.toLowerCase().trim()}`
  );

  if (!response.ok) {
    throw new Error("Pokemon not found");
  }

  return response.json();
}

