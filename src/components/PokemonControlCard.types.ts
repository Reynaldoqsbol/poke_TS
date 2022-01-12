import { Pokemon } from "../services/pokemon";

export type PokemonControlCardProps = {
  pokemon: Pokemon;
  onNext?: () => void;
  onPrevious?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
  voteStatus?: string;
};
