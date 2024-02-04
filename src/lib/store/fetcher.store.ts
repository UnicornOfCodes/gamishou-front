// store/fetcher.ts
import { nanoquery } from "@nanostores/query";

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys: any[]) => fetch(keys.join("")).then((r) => r.json()),
});
