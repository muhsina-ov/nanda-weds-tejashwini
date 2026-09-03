// SPA entry — replaces TanStack Start's SSR pipeline
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getRouter } from "./router";
import "./styles.css";

const queryClient = new QueryClient();
const router = getRouter();

// Dynamically set absolute OG metadata using current deployment origin
if (typeof window !== "undefined" && window.location?.origin) {
  const origin = window.location.origin;
  document.querySelectorAll('meta[property="og:url"]').forEach((el) => el.setAttribute("content", `${origin}/`));
  document.querySelectorAll('meta[property="og:image"]').forEach((el) => el.setAttribute("content", `${origin}/og-image.jpg`));
  document.querySelectorAll('meta[property="og:image:secure_url"]').forEach((el) => el.setAttribute("content", `${origin}/og-image.jpg`));
  document.querySelectorAll('meta[name="twitter:url"]').forEach((el) => el.setAttribute("content", `${origin}/`));
  document.querySelectorAll('meta[name="twitter:image"]').forEach((el) => el.setAttribute("content", `${origin}/og-image.jpg`));
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
