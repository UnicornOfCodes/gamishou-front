import { action } from "nanostores";
import { $stats } from "../store/stats.store";
import { $dependenciesStore } from "../store/dependencies.store";

const dependencies = $dependenciesStore.get();
const statsGateway = dependencies.statsGateway;

export const getStats = action($stats, "get-state", async (store) => {
  const stats = await statsGateway.getStats();
  store.set(stats);
});
