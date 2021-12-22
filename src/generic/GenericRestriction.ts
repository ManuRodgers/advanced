class ClassImpl<T extends object, K extends keyof T> {
  constructor(private readonly object: T, private readonly key: K) {}

  getValue(): T[K] {
    return this.object[this.key];
  }

  setValue(value: T[K]): void {
    this.object[this.key] = value;
  }
}

const player = {
  name: "Manu",
  age: 30,
  city: "Mumbai"
};

type Player = typeof player;

new ClassImpl(player, "name").getValue();
