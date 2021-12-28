type ResolveFunc = (value?: any) => any;
type RejectFunc = (reason?: any) => any;
type PromiseParams = (resolve: ResolveFunc, reject: RejectFunc) => any;
class MyPromise {
  private readonly resolveFunc: ResolveFunc;
  private readonly rejectFunc: RejectFunc;
  constructor(promiseParams: PromiseParams) {
    this.resolveFunc = value => {
      console.log(value);
    };
    this.rejectFunc = reason => {
      console.log(reason);
    };
    promiseParams(this.resolveFunc, this.rejectFunc);
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve("Hello");
  reject("World");
});
