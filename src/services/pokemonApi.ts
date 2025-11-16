import { Pokemon, FavoritePokemon, FavoriteResponse } from "../types/pokemon";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
const FAVORITES_API_BASE_URL = "https://poke-collection-lite-production.up.railway.app/api";

export async function fetchPokemon(nameOrId: string): Promise<Pokemon> {
  const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
  if (!response.ok) {
    throw new Error("Pokemon not found");
  }
  return response.json();
}

// Favorites API endpoints
export async function fetchFavorites(username: string): Promise<FavoritePokemon[]> {
  const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  const result = await response.json();
  
  // The API returns { ok: true, data: [...] }
  const favorites = result.data || result;
  
  // For each favorite, fetch the full Pokemon data to enrich with pokemonId and image
  const enrichedFavorites = await Promise.all(
    favorites.map(async (fav: any) => {
      try {
        // Fetch the Pokemon from PokeAPI to get full data
        const pokemonResponse = await fetch(`${POKEAPI_BASE_URL}/pokemon/${fav.name.toLowerCase()}`);
        if (pokemonResponse.ok) {
          const pokemon = await pokemonResponse.json();
          return {
            id: fav.id || fav.pokemonId || pokemon.id, // Preserve backend DB ID if available
            pokemonId: pokemon.id, // Pokemon's Pokedex ID
            name: fav.name,
            imageUrl: pokemon.sprites.other["official-artwork"].front_default,
            types: fav.types || pokemon.types.map((t: any) => t.type.name),
          };
        }
      } catch (error) {
        // If fetching fails, use fallback data
      }
      
      // Fallback if API fetch fails
      return {
        id: fav.id || fav.pokemonId || 0,
        pokemonId: fav.pokemonId || 0,
        name: fav.name,
        imageUrl: fav.avatarUrl || fav.imageUrl || "",
        types: fav.types || [],
      };
    })
  );
  
  return enrichedFavorites;
}

export async function addToFavorites(
  username: string,
  pokemon: Pokemon
): Promise<FavoriteResponse> {
  const payload = {
    pokemonId: pokemon.id,
    name: pokemon.name,
    imageUrl: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((t) => t.type.name),
  };

  const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Handle 409 (conflict) - Pokemon might already exist
  // We'll return a dummy response and let the caller refresh from server
  if (response.status === 409) {
    // Return the Pokemon data we tried to add
    // The caller will refresh from server to get the real state
    return {
      id: pokemon.id,
      pokemonId: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.sprites.other["official-artwork"].front_default,
      types: pokemon.types.map((t) => t.type.name),
    };
  }
  
  if (!response.ok) {
    throw new Error("Failed to add to favorites");
  }
  
  const result = await response.json();
  const data = result.data || result;
  
  // Map the API response to our FavoritePokemon interface
  return {
    id: data.id || data.pokemonId || pokemon.id,
    pokemonId: data.pokemonId || data.id || pokemon.id,
    name: data.name || pokemon.name,
    imageUrl: data.avatarUrl || data.imageUrl || pokemon.sprites.other["official-artwork"].front_default,
    types: data.types || pokemon.types.map((t) => t.type.name),
  };
}

export async function removeFromFavorites(username: string, pokemonIdOrName: number | string): Promise<void> {
  const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites/${pokemonIdOrName}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove from favorites");
  }
}

export async function resetFavorites(username: string): Promise<void> {
  const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/reset`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to reset favorites");
  }
}

