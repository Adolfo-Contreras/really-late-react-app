import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import SearchContext from "./context/searchContext.jsx";
import NewsContext from "./context/newsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SearchContext>
        <NewsContext>
          <App />
        </NewsContext>
      </SearchContext>
    </ThemeProvider>
  </React.StrictMode>
);
