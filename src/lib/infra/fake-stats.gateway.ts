import type { GetStatsResponse, StatsGateway } from "@model/stats.gateway";

export class FakeStatsGateway implements StatsGateway {
  returnedStats!: {
    nbArticle: number;
    nbGame: number;
  };

  getStats(): Promise<GetStatsResponse> {
    return Promise.resolve(this.returnedStats);
  }
}
