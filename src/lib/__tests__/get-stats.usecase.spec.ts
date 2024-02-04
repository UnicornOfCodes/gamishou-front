import { describe, it, expect } from "vitest";
import { $stats } from "../store/stats.store";
import { getStats } from "../usecases/get-stats.usecase";
import { statsGateway } from "../infra/fake-stats.gateway";

describe("Feature: retrieving stats", () => {
  it("All users can see stats", async ({ expect }) => {
    // arrange (given)
    givenExistingStats({
      nbArticle: 10,
      nbGame: 5,
    });
    // act (when)
    await whenRetrievingStats();

    // assert (then)
    thenTheReceivedStatsShouldBe({
      nbArticle: 10,
      nbGame: 5,
    });
  });
});

function givenExistingStats(stats: { nbArticle: number; nbGame: number }) {
  statsGateway.returnedStats = stats;
}

async function whenRetrievingStats() {
  await getStats();
}

function thenTheReceivedStatsShouldBe(expectedStats: {
  nbArticle: number;
  nbGame: number;
}) {
  const stats = $stats.get();
  expect(stats).toEqual(expectedStats);
}
