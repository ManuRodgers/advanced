type TypeAnimal = {
  age: number;
  gender: string;
  height: number;
  weight: number;
};

type TypePeople = {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
};

type ExtractType<T, U> = T extends U ? T : never;
type ExcludeType<T, U> = T extends U ? never : T;
type KeyOfAny = keyof any;
type RecordType<K extends keyof any, T> = {
  [P in K]: T;
};

type AnimalRecord = RecordType<string, TypeAnimal>;
