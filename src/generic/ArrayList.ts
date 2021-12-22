class ArrayList<T = {}> {
  public items: Array<T> = [];
  public index: number = 0;
  constructor() {}
  public get(index: number): T {
    return this.items[index];
  }

  public getAll(): Array<T> {
    return this.items;
  }

  add(item: T): void {
    ArrayList.checkIndex(this.index);
    this.items[this.index++] = item;
  }

  private static checkIndex(index: number): void {
    if (index < 0) {
      throw new Error("Index out of bounds");
    }
  }

  public show(): void {
    console.log(this.items);
  }

  public remove(value: T): T {
    if (typeof value === "number") {
      return this.items.splice(value, 1)[0];
    } else if (typeof value === "object") {
      const index = this.items.indexOf(value);
      return this.items.splice(index, 1)[0];
    }
    throw new Error("Index out of bounds");
  }
}
type Person = {
  name: string;
  age: number;
};

type Customer = {
  customerName: string;
  customerAge: number;
};
const John: Person = {
  name: "John",
  age: 30,
};
const James: Person = {
  name: "James",
  age: 25,
};
const Mary: Person = {
  name: "Mary",
  age: 35,
};

const JohnCustomer: Customer = {
  customerName: "John",
  customerAge: 30,
};
const JamesCustomer: Customer = {
  customerName: "James",
  customerAge: 25,
};
const MaryCustomer: Customer = {
  customerName: "Mary",
  customerAge: 35,
};

const list = new ArrayList<Person>();

function isCustomer(value: any): value is Customer {
  return Boolean(value && value.customerName && value.customerAge);
}

console.log(isCustomer(JohnCustomer) ? JohnCustomer.customerName : undefined);

console.log(isCustomer(Mary) ? Mary.customerName : undefined);
