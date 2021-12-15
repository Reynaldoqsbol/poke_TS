import { useState, useEffect } from "react";
import { Pokemon, retrievePokemon } from "src/services/pokemon";

export const useRetrieveNextPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);

  const next = () => {
    setIndex(index + 1);
  };

  const previous = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    retrievePokemon(index)
      .then(setPokemon)
      .catch((err) => {
        setError(err);
        setPokemon(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [index]);

  return { index, loading, error, pokemon, next, previous };
};
