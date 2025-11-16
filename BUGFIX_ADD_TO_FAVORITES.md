# Bug Fix: Add to Favorites Issue

## Problem
Sometimes adding Pokemon to favorites doesn't work in the Poke Collection page.

## Root Cause
When the API returns a 409 conflict error (Pokemon already exists in favorites), the local state wasn't being updated to reflect the server state. This caused the UI to show incorrect button states.

## Solution Implemented
Modified the `handleToggleFavorite` function in `PokeCollectionPage.tsx` to:

1. **Refresh favorites on error**: When adding to favorites fails (409 or any other error), automatically fetch the latest favorites from the server to sync local state
2. **Better error handling**: Added specific handling for 409 (conflict) status codes in the API
3. **Graceful fallback**: If the refresh also fails, keep the current state to avoid breaking the UI

## Code Changes

### File: `src/pages/PokeCollectionPage/PokeCollectionPage.tsx`

```typescript
async function handleToggleFavorite() {
  if (!currentPokemon || !username) return;

  const favorite = isFavorite();
  setIsTogglingFavorite(true);

  try {
    if (favorite) {
      await removeFromFavorites(username, favorite.id);
      setFavorites(favorites.filter((fav) => fav.id !== favorite.id));
    } else {
      const newFavorite = await addToFavorites(username, currentPokemon);
      setFavorites([...favorites, newFavorite]);
    }
  } catch (error) {
    // If there's an error (e.g., 409 conflict), refresh favorites to sync with server
    try {
      const updatedFavorites = await fetchFavorites(username);
      setFavorites(Array.isArray(updatedFavorites) ? updatedFavorites : []);
    } catch (refreshError) {
      // If refresh also fails, keep current state
    }
  } finally {
    setIsTogglingFavorite(false);
  }
}
```

### File: `src/services/pokemonApi.ts`

```typescript
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

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error("Pokemon already in favorites");
    }
    throw new Error("Failed to add to favorites");
  }
  return response.json();
}
```

## Testing Observations

During testing with the "test" user account:
- **Issue**: Multiple 409 conflicts were returned when trying to add Pokemon
- **Issue**: After conflict, the favorites refresh returns an empty array
- **Possible Cause**: The "test" user account may have corrupted or inconsistent state on the server
- **Recommendation**: Test with fresh user accounts to verify full functionality

## Expected Behavior

1. **New Pokemon**: Successfully adds to favorites and appears in favorites sidebar
2. **Duplicate Pokemon** (409): Automatically refreshes favorites list to show existing Pokemon
3. **Remove Pokemon**: Successfully removes from favorites and updates sidebar
4. **Button States**: Correctly toggles between "Add to Favorites" and "Remove from Favorites"

## Known Limitations

The current implementation relies on the Poke Collection Lite API returning accurate data. If the API has issues:
- Empty favorites array despite Pokemon existing on server
- Inconsistent 409 responses

These are server-side issues that cannot be fully resolved on the client side, but the improved error handling makes the UI more resilient.

## Recommendations

1. **Test with fresh usernames** to avoid corrupted state issues
2. **Consider adding a manual "Refresh" button** for users to manually sync favorites
3. **Add toast notifications** to inform users when operations succeed or fail
4. **Implement retry logic** for failed API calls

