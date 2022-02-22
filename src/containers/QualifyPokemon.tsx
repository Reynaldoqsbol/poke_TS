import { useState } from "react";

import Container from "@mui/material/Container";

import { useStorePokemonRate } from "src/utils";

export const QualifyPokemon: React.FC = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonQualification, like, dislike] = useStorePokemonRate(pokemonId);

  return (
    <Container maxWidth="xs" style={{ padding: "10px", color: "white" }}>
      <button
        onClick={() => {
          setPokemonId(pokemonId - 1);
        }}
      >
        prev pokemon
      </button>
      <button
        onClick={() => {
          setPokemonId(pokemonId + 1);
        }}
      >
        next pokemon
      </button>

      <hr />
      <button onClick={like}>like</button>
      <button onClick={dislike}>dislike</button>
      {JSON.stringify({ pokemonId, pokemonQualification })}
      <small>
        <pre>{JSON.stringify({}, null, 2)}</pre>
      </small>
    </Container>
  );
};
