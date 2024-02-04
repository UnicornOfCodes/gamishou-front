import { atom } from "nanostores";

export type Stats = {
  nbArticle: number;
  nbGame: number;
};

export const $stats = atom({} as Stats);
