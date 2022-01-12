import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { PokemonBannerProps } from "./PokemonBanner.types";

export const PokemonBanner: React.FC<PokemonBannerProps> = ({
  pokemon,
  index,
}) => (
  <Box
    sx={{
      p: 3,
      pt: 10,
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Stack direction="row" spacing={1}>
        {pokemon.types.map((type) => (
          <Chip
            key={type.slot}
            label={type.type.name}
            color="secondary"
            size="small"
            sx={{ px: 1 }}
          />
        ))}
      </Stack>
      <Typography variant="body1" color="white">
        #{index}
      </Typography>
    </Box>
    <Box sx={{ width: 300, height: 300, margin: "0 auto" }}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon"
      />
    </Box>
  </Box>
);
