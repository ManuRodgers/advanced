class ChinesePeople2 {
  constructor(
    public name: string,
    public address: string,
    public age: number
  ) {}
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
// 任何一个类或者函数，在 js 或者 ts 环境下有双重身份，一个是在 new 的时候代表类型，也可以当做是有一个构造函数对象变量，是一个值。
// const MyChinesePeople2: new (
//   name: string,
//   address: string,`
//   age: number
// ) => ChinesePeople2 = ChinesePeople2;
const MyChinesePeople2: typeof ChinesePeople2 = ChinesePeople2; // 构造函数对象变量
const myChinesePeople2 = new MyChinesePeople2("张三", "北京", 18);
console.log("-> myChinesePeople2", myChinesePeople2);
const MyChinesePeople3: new (...args: any[]) => any = ChinesePeople2; // 构造函数对象变量
const myChinesePeople3 = new MyChinesePeople3("张三", "北京", 18);
console.log("-> myChinesePeople3", myChinesePeople3);
type GenericFactoryConstructor<T> = new (...args: any[]) => T;

const MyChinesePeople4: GenericFactoryConstructor<ChinesePeople2> = ChinesePeople2;
const myChinesePeople5 = new MyChinesePeople4("张三", "北京", 18);
console.log("-> myChinesePeople5", myChinesePeople5);
