import Container from "@mui/material/Container";

import { PokemonBanner, PokemonControlCard } from "src/components";
import { useRetrieveNextPokemon, useVoteControl } from "src/utils";

export const QualifyPokemon: React.FC = () => {
  const data = useRetrieveNextPokemon();

  const { voteStatus, onLike, onDislike } = useVoteControl(data.index);

  return (
    <Container maxWidth="xs">
      {data.pokemon && (
        <PokemonBanner pokemon={data.pokemon} index={data.index} />
      )}
      {data.pokemon && (
        <PokemonControlCard
          onNext={data.next}
          onPrevious={data.previous}
          pokemon={data.pokemon}
          onLike={onLike}
          onDislike={onDislike}
          voteStatus={voteStatus}
        />
      )}
      Vote status: {voteStatus}
      <small>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </small>
    </Container>
  );
};
