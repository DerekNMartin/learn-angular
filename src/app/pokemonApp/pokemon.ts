interface Item {
  name: string;
  url: string;
}

interface Ability {
  ability: {
    name: 'overgrow';
    url: 'https://pokeapi.co/api/v2/ability/65/';
  };
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: Item;
}

interface Move {
  move: Item;
  version_group_details: [
    {
      level_learned_at: 0;
      move_learn_method: Item;
      version_group: Item;
    }
  ];
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Item;
}

interface Type {
  slot: number;
  type: Item;
}

export interface Pokemon {
  id?: number;
  order?: number;
  name?: string;
  base_experience?: number;
  height?: number;
  weight?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  abilities?: Ability[];
  forms?: Item[];
  game_indices?: GameIndex[];
  moves?: Move[];
  species?: Item;
  stats?: Stat[];
  types?: Type[];
  cries?: { latest: string; legacy: string };
  held_items?: [];
  past_abilities?: [];
  past_types?: [];
  sprites?: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
    };
    versions: Object;
  };
}
