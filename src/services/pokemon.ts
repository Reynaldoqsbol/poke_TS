export type Pokemon = {
  name: string;
  abilities: [
    { ability: { name: string; url: string }; is_hidden: boolean; slot: number }
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: [{ slot: number; type: { name: string; url: string } }];
};

export const retrievePokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};
