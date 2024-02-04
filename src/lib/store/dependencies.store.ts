import { atom } from "nanostores";
import type { StatsGateway } from "../model/stats.gateway";
import { FakeStatsGateway } from "../infra/fake-stats.gateway";

export type Dependencies = {
  statsGateway: StatsGateway;
};

export const $dependenciesStore = atom<Dependencies>({
  statsGateway: new FakeStatsGateway(),
});
