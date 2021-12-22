class CommercialBank {
  constructor(
    public username: string,
    public address: string,
    public balance: number
  ) {
    this.username = username;
    this.address = address;
    this.balance = balance;
  }
  public loan(): void {
    console.log(`${this.username} is lending money`);
  }
}

// 通用函数类型
type CommonFunctionType = (...args: any) => any;
// 完完全全等价的 接口和类型别名的方式
// interface CommonFunctionType {
//   (...args: any): any;
// }

const func: CommonFunctionType = (
  balance: number,
  username: string,
  address: string
): void => {};

// CommercialBank 作为一个ts 里面的类或者一个js 里面的构造函数有两个很重要的身份或者说是双重性质
// 1. CommercialBank 是一个可以 new 出对象的类型. 2. CommercialBank 是一个类构造函数的变量对象

//  工厂函数类型 (就是指在一些特殊情况或者不能够 new 出对象的时候, 我们可以使用工厂函数来创建对象)
// 工厂函数类型代表任意一个类构造函数对象变量（等价于 JS 的构造函数）的函数类型
// type FactoryFunctionType = new (...args: any) => any; // 工厂函数类型
//
// const factory: FactoryFunctionType = CommercialBank;
// const commercialBank: CommercialBank = new factory(
//   "张三",
//   "北京市朝阳区",
//   100000
// );

function createInstanceFactory(Constructor: new (...args: any) => any) {
  console.log(`createInstanceFactory: ${Constructor.name} is created`);
  return new Constructor("张三", "北京市朝阳区", 100000);
}
const commercialBank1 = createInstanceFactory(CommercialBank);
// 泛型工厂函数
function createInstanceFactory2<T>(Constructor: { new (...args: any): T }): T {
  console.log(`createInstanceFactory: ${Constructor.name} is created`);
  return new Constructor("张三", "北京市朝阳区", 100000);
}
const commercialBank2 = createInstanceFactory2<CommercialBank>(CommercialBank);
