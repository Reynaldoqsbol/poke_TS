import Container from "@mui/material/Container";

import { PokemonBanner, PokemonControlCard } from "src/components";
import { useRetrieveNextPokemon } from "src/utils";

export const QualifyPokemon: React.FC = () => {
  const data = useRetrieveNextPokemon();
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
        />
      )}

      <small>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </small>
    </Container>
  );
};
