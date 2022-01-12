import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { PokemonControlCardProps } from "./PokemonControlCard.types";

export const PokemonControlCard: React.FC<PokemonControlCardProps> = ({
  pokemon,
  onNext,
  onPrevious,
  onLike,
  onDislike,
  voteStatus,
}) => {
  console.log(voteStatus);
return (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "grey.100",
      borderRadius: 6,
      p: 2,
    }}
  >
    <Typography variant="h4" sx={{ mb: 2, textTransform: "capitalize" }}>
      {pokemon.name}
    </Typography>
    <Typography variant="body2" sx={{ color: "#a1a9b7", mb: 2 }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
      aliquid tempore quas laudantium delectus veniam nemo labore dolorem, nobis
      iste. Repellat magnam quae delectus perferendis illum expedita labore quam
      minus!
    </Typography>
    <Typography variant="h5" sx={{ mb: 1 }}>
      Abilities:
    </Typography>
    <Stack direction="row" spacing={1}>
      {pokemon.abilities.map((ability) => (
        <Chip
          key={ability.slot}
          label={ability.ability.name}
          size="small"
          color="primary"
          sx={{ px: 1 }}
        />
      ))}
    </Stack>

    <Stack direction="row" spacing={2} sx={{ justifyContent: "center", my: 3 }}>
      <IconButton 
        onClick={onDislike} 
        aria-label="vote" 
        sx={{ color: "#8D99AE" }} 
        size="large"
        >
        {voteStatus === "disliked" ? (<ThumbDownIcon fontSize="large" />):(<ThumbDownOffAltIcon fontSize="large" />)}
      </IconButton>
      <IconButton
        onClick={onLike}
        aria-label="vote"
        size="large"
        sx={{ color: "#06D6A0" }}
      >
        {voteStatus === "liked" ? (<ThumbUpIcon fontSize="large" />):(<ThumbUpOutlinedIcon fontSize="large" />)}
      </IconButton>
    </Stack>

    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button onClick={onPrevious} variant="text" startIcon={<ArrowBackIcon />}>
        prev
      </Button>
      <Button onClick={onNext} variant="text" endIcon={<ArrowForwardIcon />}>
        next
      </Button>
    </Box>
  </Box>
)};
