import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Routing from "./Routing.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Routing />
  </QueryClientProvider>
  // </StrictMode>
);
