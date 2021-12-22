// infer 的定义：infer 是在 extends 泛型约束中以占位符的形势出现的，后面必须跟一个类型，泛型必须要定义以后才能使用，infer 不需要定义 可以直接使用
// 不过 infer 和泛型一样都是在具体使用的时候才能推断出来的，所以 infer 只能用在 extends 泛型约束中. 当然也有极少数情况下 infer 可以用在泛型的具体类型中
// infer 的使用1：infer 出现在 extends 泛型约束中的条件语句后的函数类型的参数类型上
interface ICustomer1 {
  customerName: string;
  customerMoney: number;
}

type CustomerFunctionType1 = (customer: ICustomer1) => string; // 函数类型
type InferType1<T> = T extends (params: infer P) => any ? P : T; // infer 的类型
type InferTypeResult1 = InferType1<CustomerFunctionType1>;
