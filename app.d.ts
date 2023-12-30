//Global types. No need to import, just use them
type TCharacter = {
  readonly id: string;
  readonly name: string;
  readonly alternate_names: string[] | [];
  readonly species: string;
  readonly gender: string;
  readonly house: string;
  readonly dateOfBirth: Date | null;
  readonly yearOfBirth: number | null;
  readonly wizard: boolean;
  readonly ancestry: string;
  readonly eyeColour: string;
  readonly hairColour: string;
  readonly wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  readonly patronus: string;
  readonly hogwartsStudent: boolean;
  readonly hogwartsStaff: boolean;
  readonly actor: string;
  readonly alternate_actors: [];
  readonly alive: boolean;
  readonly image: string;
};

type TComment = {
  readonly name: string;
  readonly body: string;
  readonly id: number;
  readonly email: string;
};
