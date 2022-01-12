import { ThemeProvider } from "@emotion/react";

import Box from "@mui/material/Box";

import { theme } from "src/styles/theme";
import { QualifyPokemon } from "./containers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#2b2d42" }}>
        <QualifyPokemon />
      </Box>
    </ThemeProvider>
  );
}

export default App;
