import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#ff0000",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
