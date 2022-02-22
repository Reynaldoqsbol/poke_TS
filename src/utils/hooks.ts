import { useState, useEffect } from "react";
import { getItem, setItem, removeItem } from "src/services/store";

import { Pokemon, retrievePokemon } from "src/services/pokemon";

// @TODO: useRetrievePokemonById

export const useStorePokemonRate = (pokemonId: number) => {
  const [vote, setVote] = useState<boolean | null>(null);

  const onLikePokemon = () => {
    if (vote === true) {
      setVote(null);
      removeItem(pokemonId.toString());
    } else {
      setVote(true);
      setItem<boolean>(pokemonId.toString(), true);
    }
  };

  const onDislikePokemon = () => {
    if (vote === false) {
      setVote(null);
      removeItem(pokemonId.toString());
    } else {
      setVote(false);
      setItem<boolean>(pokemonId.toString(), false);
    }
  };
  useEffect(() => {
    const storedStatus = getItem<boolean>(pokemonId.toString());
    setVote(storedStatus);
  }, [pokemonId]);

  return [vote, onLikePokemon, onDislikePokemon] as const;
};
