import { Pokemon } from "../types/pokemon";

const API_BASE_URL = "https://poke-collection-lite-production.up.railway.app/api";

export async function getFavoritePokemon(userId: string): Promise<Pokemon[]> {
  const response = await fetch(`${API_BASE_URL}/${userId}/favorites`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("USER_NOT_FOUND");
    }
    throw new Error("Failed to fetch favorite Pokemon");
  }

  const data = await response.json();
  return data || [];
}

export async function addFavoritePokemon(userId: string, pokemon: Pokemon): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/${userId}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });

  if (!response.ok) {
    throw new Error("Failed to add favorite Pokemon");
  }
}

export async function removeFavoritePokemon(userId: string, pokemonId: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/${userId}/favorites/${pokemonId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove favorite Pokemon");
  }
}
