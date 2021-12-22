// infer 的使用1：infer 出现在 extends 泛型约束中的条件语句后的函数类型的参数类型上
interface ICustomer2 {
  customerName: string;
  customerMoney: number;
}

type CustomerFunctionType2 = (customer: ICustomer2) => string;
type InferType2<T> = T extends (params: ICustomer2) => infer P ? P : T;
type InferResultType2 = InferType2<CustomerFunctionType2>;
