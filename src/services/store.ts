export type pokemonStatus = "disliked" | "liked" | "neutral";

export const setVote = (id: number, status: pokemonStatus) => {
  localStorage.setItem(id.toString(), status);
};

export const checkVote = (id: number): pokemonStatus => {
  const status = localStorage.getItem(id.toString());
  if (!status) {
    return "neutral";
  }
  return status as pokemonStatus;
};
