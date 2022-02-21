import Container from "@mui/material/Container";

import { useRetrieveNextPokemon, useVoteControl } from "src/utils";

export const QualifyPokemon: React.FC = () => {
  const data = useRetrieveNextPokemon();

  const { voteStatus, onLike, onDislike } = useVoteControl(data.index);

  return (
    <Container maxWidth="xs">
      
      Vote status: {voteStatus}
      <small>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </small>
    </Container>
  );
};
