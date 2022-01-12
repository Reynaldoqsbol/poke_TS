import { useState, useEffect } from "react";
import { Pokemon, retrievePokemon } from "src/services/pokemon";
import { checkVote, pokemonStatus, setVote } from "src/services/store";

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

export const useVoteControl = (pokemonId: number) => {
  const [voteStatus, setVoteStatus] = useState<pokemonStatus>("neutral");

  const onLike = () => {
    if (voteStatus === "liked") {
      setVoteStatus("neutral");
      setVote(pokemonId, "neutral");
      return;
    }
    setVoteStatus("liked");
    setVote(pokemonId, "liked");
  };

  const onDislike = () => {
    if (voteStatus === "disliked") {
      setVoteStatus("neutral");
      setVote(pokemonId, "neutral");
      return;
    }
    setVoteStatus("disliked");
    setVote(pokemonId, "disliked");
  };

  useEffect(() => {
    const status = checkVote(pokemonId);
    setVoteStatus(status);
  }, [pokemonId]);

  return { voteStatus, onLike, onDislike };
};
