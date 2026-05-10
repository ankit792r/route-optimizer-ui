import { useMutation } from "@tanstack/react-query";
import { optimizeRoute } from "../services/routeApi";

export function useRouteOptimization() {
  return useMutation({
    mutationFn: optimizeRoute,
  });
}