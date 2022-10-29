import { useState } from 'react'
import "./styles/fonts.scss";
import "./styles/tailwind.scss";
import "./styles/globals.scss";
import routes from "./routes";
import { useRoutes } from "react-router";

function App() {
  const routing = useRoutes(routes);
  return <>{routing}</>;
}

export default App
  