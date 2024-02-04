export type GetStatsResponse = {
  nbArticle: number;
  nbGame: number;
};

export interface StatsGateway {
  getStats(): Promise<GetStatsResponse>;
}
