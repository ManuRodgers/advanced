//5-3constructorparam.ts
class TestClass {
  // 准备类
  public name: string;
  public classno: number;
  constructor(name: string, classno: number) {
    this.name = name;
    this.classno = classno;
  }
  eat() {
    console.log("姓名为: " + this.name);
  }
}

// type ConstructorParametersType<
//   T extends new (...args: any[]) => any
// > = T extends new (...args: infer P) => any ? P : never;
// // 泛型工厂函数
// type Constructor<T> = new (...args: any[]) => T;
//
// function createInstanceFactory1<T, CP extends new (...args: any[]) => any>(
//   constructor: Constructor<T>,
//   ...arg: ConstructorParametersType<CP>
// ) {
//   return new constructor(...arg);
// }
//
// createInstanceFactory1<TestClass, typeof TestClass>(TestClass, "张三", 1);

// 泛型工厂函数
type GenericConstructor<T> = new (...args: any[]) => T;

type AnyConstructor = new (...args: any[]) => any;

type ConstructorParametersType<T extends AnyConstructor> = T extends new (
  ...args: infer P
) => any
  ? P
  : never;

function createInstanceFactory3<T, CP extends AnyConstructor>(
  constructor: GenericConstructor<T>,
  ...args: ConstructorParametersType<CP>
) {
  return new constructor(...args);
}

const testClass = createInstanceFactory3<TestClass, typeof TestClass>(
  TestClass,
  "张三",
  1
);
