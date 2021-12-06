import { ThemeProvider } from "@emotion/react";

import { theme } from "src/styles/theme";
import { useRetrieveNextPokemon } from "./utils";

function App() {
  const data = useRetrieveNextPokemon();

  return (
    <ThemeProvider theme={theme}>
      <small>
        <p>
          <button onClick={data.previous}>previous</button>
        </p>
        <p>
          <button onClick={data.next}>next</button>
        </p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </small>
    </ThemeProvider>
  );
}

export default App;
