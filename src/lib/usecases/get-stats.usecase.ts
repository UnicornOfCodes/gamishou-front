import { action } from "nanostores";
import { $stats } from "../store/stats.store";
import { statsGateway } from "../infra/fake-stats.gateway";

export const getStats = action($stats, "get-state", async (store) => {
  // Utiliser les dépendances ici
  const stats = await statsGateway.getStats();
  // Exemple : const stats = await gateway.fetchStats();

  store.set(stats);
});
