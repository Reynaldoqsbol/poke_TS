import { Pokemon } from "../services/pokemon";

export type PokemonControlCardProps = {
  pokemon: Pokemon;
  onNext?: () => void;
  onPrevious?: () => void;
};
