import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import IntroLandingV2 from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <IntroLandingV2 />
  </StrictMode>
);
