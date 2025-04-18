import { createFileRoute, redirect } from "@tanstack/react-router";

// This route exists just to redirect to /pokemon
export const Route = createFileRoute("/")({
  loader: () => redirect({ to: "/pokemon" }),
});
