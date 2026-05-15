import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export default function ScrollToTop() {
  const routerState = useRouterState();
  const location = routerState.location;

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — scroll on every location change
  useEffect(() => {
    const { hash, pathname } = location;
    // Silence unused warning; pathname triggers re-run on page changes
    void pathname;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  return null;
}
