import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
// import { theme } from "./constants/theme";
import { Router } from "./routes/Router";



function App() {
  return (
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  );
}

export default App;
