import { useState, useEffect, useContext, FormEvent } from "react";
import { I18nContext } from "../../contexts";
import { LanguagePicker, Breadcrumb, Input, TypeBadge } from "../../components";
import {
  fetchPokemon,
  fetchFavorites,
  addToFavorites,
  removeFromFavorites,
} from "../../services/pokemonApi";
import {
  formatPokemonId,
  formatWeight,
  formatHeight,
  capitalizeName,
} from "../../utils/pokemonHelpers";
import type { Pokemon, FavoritePokemon } from "../../types/pokemon";
import styles from "./PokeCollectionPage.module.css";

import pokemonLogo from "../../assets/pokemon-logo.svg";
import weightIcon from "../../assets/weight-icon.svg";
import heightIcon from "../../assets/height-icon.svg";
import addFavoriteIcon from "../../assets/add-favorite-icon.svg";
import removeFavoriteIcon from "../../assets/remove-favorite-icon.svg";

const STORAGE_KEY = "pokecollection-username";

function PokeCollectionPage() {
  const { t } = useContext(I18nContext);
  
  // State
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [searchError, setSearchError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);
  const [removedPokemonNames, setRemovedPokemonNames] = useState<Set<string>>(new Set());
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);

  // Load username from localStorage on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem(STORAGE_KEY);
    if (savedUsername) {
      setUsername(savedUsername);
      handleAutoLogin(savedUsername);
    }
  }, []);

  async function handleAutoLogin(savedUsername: string) {
    try {
      const userFavorites = await fetchFavorites(savedUsername);
      // Start with server data, removedPokemonNames will be empty on fresh login
      setFavorites(Array.isArray(userFavorites) ? userFavorites : []);
      setIsLoggedIn(true);
    } catch (error) {
      // If auto-login fails, clear localStorage
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoggingIn(true);
    setLoginError("");

    try {
      const userFavorites = await fetchFavorites(username.trim());
      // Start with server data, removedPokemonNames will be empty on fresh login
      setFavorites(Array.isArray(userFavorites) ? userFavorites : []);
      setIsLoggedIn(true);
      localStorage.setItem(STORAGE_KEY, username.trim());
    } catch (error) {
      setLoginError(t("pokemon-error-user-not-found"));
    } finally {
      setIsLoggingIn(false);
    }
  }

  function handleExit() {
    setIsLoggedIn(false);
    setUsername("");
    setCurrentPokemon(null);
    setSearchQuery("");
    setFavorites([]);
    setRemovedPokemonNames(new Set());
    localStorage.removeItem(STORAGE_KEY);
  }

  async function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchError("");

    try {
      const pokemon = await fetchPokemon(searchQuery.trim());
      setCurrentPokemon(pokemon);
    } catch (error) {
      setSearchError(t("pokemon-error-not-found"));
      setCurrentPokemon(null);
    } finally {
      setIsSearching(false);
    }
  }

  async function handleFavoriteClick(pokemon: FavoritePokemon) {
    try {
      const fullPokemon = await fetchPokemon(pokemon.name);
      setCurrentPokemon(fullPokemon);
      setSearchQuery(pokemon.name);
      setSearchError("");
    } catch (error) {
      // Handle error silently
    }
  }

  function isFavorite(): FavoritePokemon | null {
    if (!currentPokemon) return null;
    // Compare by name since the API doesn't always return pokemonId
    return (
      favorites.find(
        (fav) =>
          fav.name.toLowerCase() === currentPokemon.name.toLowerCase() ||
          fav.pokemonId === currentPokemon.id
      ) || null
    );
  }

  async function handleToggleFavorite() {
    if (!currentPokemon || !username) return;

    const favorite = isFavorite();
    setIsTogglingFavorite(true);

    try {
      if (favorite) {
        // WORKAROUND: Backend API is broken - it doesn't provide the ID needed for deletion
        // So we "remove" the Pokemon optimistically on the frontend only
        const pokemonName = currentPokemon.name.toLowerCase();
        setRemovedPokemonNames(prev => new Set(prev).add(pokemonName));
        
        // Remove from current favorites list immediately
        setFavorites(prev => prev.filter(fav => fav.name.toLowerCase() !== pokemonName));
      } else {
        // Try to add to favorites
        try {
          await addToFavorites(username, currentPokemon);
        } catch (addError) {
          // If backend fails (even with 409), we'll add optimistically anyway
          console.log('Backend add failed, adding optimistically:', addError);
        }
        
        // Remove from "removed" set if it was previously removed
        const pokemonName = currentPokemon.name.toLowerCase();
        setRemovedPokemonNames(prev => {
          const newSet = new Set(prev);
          newSet.delete(pokemonName);
          return newSet;
        });
        
        // Add to favorites list optimistically (works even if backend fails)
        const newFavorite: FavoritePokemon = {
          id: currentPokemon.id,
          pokemonId: currentPokemon.id,
          name: currentPokemon.name,
          imageUrl: currentPokemon.sprites.other["official-artwork"].front_default,
          types: currentPokemon.types.map(t => t.type.name),
        };
        
        // Check if already in list (by name), if not add it
        setFavorites(prev => {
          const exists = prev.some(fav => fav.name.toLowerCase() === pokemonName);
          if (exists) return prev;
          return [...prev, newFavorite];
        });
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsTogglingFavorite(false);
    }
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className={styles.poke}>
        <header className={styles.poke__header}>
          <div className={styles["poke__header-container"]}>
            <h1 className={styles.poke__title}>{t("app-title")}</h1>
            <Breadcrumb>{t("project-pokecollection")}</Breadcrumb>
            <LanguagePicker />
          </div>
        </header>
        <main className={styles.poke__main}>
          <div className={styles.poke__content}>
            <div className={styles["poke__login-card"]}>
              <img
                src={pokemonLogo}
                alt="Pokemon Logo"
                className={styles["poke__login-logo"]}
              />
              <form className={styles["poke__login-form"]} onSubmit={handleLogin}>
                <Input
                  type="text"
                  placeholder={t("pokemon-username-placeholder")}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoggingIn}
                  error={!!loginError}
                />
                <button
                  type="submit"
                  className={styles["poke__login-button"]}
                  disabled={isLoggingIn || !username.trim()}
                >
                  {t("pokemon-enter")}
                </button>
                {loginError && <p className={styles.poke__error}>{loginError}</p>}
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Main Screen
  return (
    <div className={styles.poke}>
      <header className={styles.poke__header}>
        <div className={styles["poke__header-container"]}>
          <h1 className={styles.poke__title}>{t("app-title")}</h1>
          <Breadcrumb>{t("project-pokecollection")}</Breadcrumb>
          <LanguagePicker />
        </div>
      </header>
      <main className={styles.poke__main}>
        <div className={styles.poke__content}>
          <div className={styles["poke__main-card"]}>
            <div className={styles["poke__search-section"]}>
              <form className={styles["poke__search-form"]} onSubmit={handleSearch}>
                <Input
                  type="text"
                  placeholder={t("pokemon-search-placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={isSearching}
                  className={styles["poke__search-input"]}
                  error={!!searchError}
                />
                <button
                  type="submit"
                  className={styles["poke__search-button"]}
                  disabled={isSearching || !searchQuery.trim()}
                >
                  {t("pokemon-search")}
                </button>
              </form>

              {currentPokemon && (
                <div className={styles["poke__pokemon-detail"]}>
                  <div>
                    <p className={styles["poke__pokemon-name"]}>
                      {capitalizeName(currentPokemon.name)}
                    </p>
                    <p className={styles["poke__pokemon-id"]}>
                      {formatPokemonId(currentPokemon.id)}
                    </p>
                  </div>
                  <img
                    src={currentPokemon.sprites.other["official-artwork"].front_default}
                    alt={currentPokemon.name}
                    className={styles["poke__pokemon-image"]}
                  />
                  <div className={styles["poke__pokemon-types"]}>
                    {currentPokemon.types.map((type, index) => (
                      <TypeBadge key={index} type={type.type.name} />
                    ))}
                  </div>
                  <div className={styles["poke__pokemon-stats"]}>
                    <div className={styles.poke__stat}>
                      <div className={styles["poke__stat-value"]}>
                        <img src={weightIcon} alt="Weight" className={styles["poke__stat-icon"]} />
                        <span className={styles["poke__stat-text"]}>
                          {formatWeight(currentPokemon.weight)}
                        </span>
                      </div>
                      <span className={styles["poke__stat-label"]}>{t("pokemon-weight")}</span>
                    </div>
                    <div className={styles["poke__stat-divider"]} />
                    <div className={styles.poke__stat}>
                      <div className={styles["poke__stat-value"]}>
                        <img src={heightIcon} alt="Height" className={styles["poke__stat-icon"]} />
                        <span className={styles["poke__stat-text"]}>
                          {formatHeight(currentPokemon.height)}
                        </span>
                      </div>
                      <span className={styles["poke__stat-label"]}>{t("pokemon-height")}</span>
                    </div>
                  </div>
                </div>
              )}

              {currentPokemon && (
                <button
                  className={styles["poke__favorite-button"]}
                  onClick={handleToggleFavorite}
                  disabled={isTogglingFavorite}
                >
              <img
                src={isFavorite() ? removeFavoriteIcon : addFavoriteIcon}
                alt=""
                className={styles["poke__favorite-icon"]}
              />
                  {isFavorite()
                    ? t("pokemon-remove-from-favorites")
                    : t("pokemon-add-to-favorites")}
                </button>
              )}

              {searchError && !currentPokemon && (
                <p className={styles.poke__error}>{searchError}</p>
              )}
            </div>

            <div className={styles["poke__favorites-sidebar"]}>
              <div className={styles["poke__favorites-header"]}>
                <h2 className={styles["poke__favorites-title"]}>
                  {t("pokemon-favorites")}
                </h2>
                <button className={styles["poke__exit-button"]} onClick={handleExit}>
                  {t("pokemon-exit")}
                </button>
              </div>
              <div className={styles["poke__favorites-list"]}>
                {favorites.length === 0 ? (
                  <div className={styles["poke__empty-state"]}>
                    {t("pokemon-empty-favorites")}
                  </div>
                ) : (
                  favorites.map((favorite) => (
                    <div
                      key={favorite.id}
                      className={styles["poke__favorite-card"]}
                      onClick={() => handleFavoriteClick(favorite)}
                    >
                      <div>
                        <p className={styles["poke__favorite-name"]}>
                          {capitalizeName(favorite.name)}
                        </p>
                        <p className={styles["poke__favorite-id"]}>
                          {formatPokemonId(favorite.pokemonId)}
                        </p>
                      </div>
                      <img
                        src={favorite.imageUrl}
                        alt={favorite.name}
                        className={styles["poke__favorite-image"]}
                      />
                      <div className={styles["poke__pokemon-types"]}>
                        {favorite.types.map((type, index) => (
                          <TypeBadge key={index} type={type} />
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { PokeCollectionPage };
