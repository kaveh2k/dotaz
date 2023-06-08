import { create } from "zustand";

const matchStore = (set) => ({
  matchId: "",

  matchData: {},

  pick: {
    Radiant: [],
    Dire: [],
    Ban: [],
  },
  showData: false,
  showError: null,

  setShowData: (sd) =>
    set({
      showData: sd,
    }),
  setShowError: (se) =>
    set({
      showError: se,
    }),

  setPick: (p) =>
    set({
      pick: p,
    }),

  setMatchData: (d) =>
    set({
      matchData: d,
    }),

  setMatchId: (i) =>
    set({
      matchId: i,
    }),
});

const useMatchStore = create(matchStore);

export default useMatchStore;
