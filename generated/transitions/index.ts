import { Transition } from "../../src/model/types";

export const rootThirdUpFifthUpNextRootMinus1Up: Transition = {
  id: "S?;T?;C,R->C,T,U->C,F,U->N,R-1;",
  name: "Root 3rd\u2191 5th\u2191 Next Root-1\u2191",
  steps: [
    { reference: "CURRENT", direction: "NONE", interval: 0, chordTone: "ROOT" },
    { reference: "CURRENT", direction: "UP", interval: 0, chordTone: "THIRD" },
    { reference: "CURRENT", direction: "UP", interval: 0, chordTone: "FIFTH" },
    { reference: "NEXT", direction: "UP", interval: -1, chordTone: "ROOT" },
  ],
};
export const rootThirdUpFifthUpNextRootPlus1Up: Transition = {
  id: "S?;T?;C,R->C,T,U->C,F,U->N,R+1;",
  name: "Root 3rd\u2191 5th\u2191 Next Root+1\u2191",
  steps: [
    { reference: "CURRENT", direction: "NONE", interval: 0, chordTone: "ROOT" },
    { reference: "CURRENT", direction: "UP", interval: 0, chordTone: "THIRD" },
    { reference: "CURRENT", direction: "UP", interval: 0, chordTone: "FIFTH" },
    { reference: "NEXT", direction: "UP", interval: 1, chordTone: "ROOT" },
  ],
};
export const rootThirdDownFifthDownNextRootMinus1Up: Transition = {
  id: "S?;T?;C,R->C,T,D->C,F,D->N,R-1;",
  name: "Root 3rd\u2193 5th\u2193 Next Root-1\u2191",
  steps: [
    { reference: "CURRENT", direction: "NONE", interval: 0, chordTone: "ROOT" },
    {
      reference: "CURRENT",
      direction: "DOWN",
      interval: 0,
      chordTone: "THIRD",
    },
    {
      reference: "CURRENT",
      direction: "DOWN",
      interval: 0,
      chordTone: "FIFTH",
    },
    { reference: "NEXT", direction: "UP", interval: -1, chordTone: "ROOT" },
  ],
};
export const rootThirdDownFifthDownNextRootPlus1Up: Transition = {
  id: "S?;T?;C,R->C,T,D->C,F,D->N,R+1;",
  name: "Root 3rd\u2193 5th\u2193 Next Root+1\u2191",
  steps: [
    { reference: "CURRENT", direction: "NONE", interval: 0, chordTone: "ROOT" },
    {
      reference: "CURRENT",
      direction: "DOWN",
      interval: 0,
      chordTone: "THIRD",
    },
    {
      reference: "CURRENT",
      direction: "DOWN",
      interval: 0,
      chordTone: "FIFTH",
    },
    { reference: "NEXT", direction: "UP", interval: 1, chordTone: "ROOT" },
  ],
};
