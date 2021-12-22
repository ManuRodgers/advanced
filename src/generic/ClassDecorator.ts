class ShopCardService {
  public productName!: string;
  public count!: number;
  constructor() {
    console.log(`${this.productName} ${this.count}`);
  }
}

type MyClassDecorator = <T>(targetClass: { new (...args: any[]): T }) => any;

function Controller(rootPath: string): MyClassDecorator {
  return function(targetClass: { new (...args: any[]): any }) {};
}
