class Vehicle {
  public _brand: string;
  public _vehicleNo: string;
  public _days: number;
  public _total!: number;
  public _deposit: number;
  constructor(brand: string, vehicleNo: string, days: number, deposit: number) {
    this._brand = brand;
    this._vehicleNo = vehicleNo;
    this._days = days;
    this._deposit = deposit;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get vehicleNo(): string {
    return this._vehicleNo;
  }

  set vehicleNo(value: string) {
    this._vehicleNo = value;
  }

  get days(): number {
    return this._days;
  }

  set days(value: number) {
    this._days = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get deposit(): number {
    return this._deposit;
  }

  set deposit(value: number) {
    this._deposit = value;
  }

  public _calculateRent(): number {
    console.log(
      `${this._brand} 车牌号为: ${this._vehicleNo}, 租车天数为: ${this._days}天, 共计: ${this._total}元`
    );
    return 0;
  }

  public _payDeposit(): void {
    console.log(
      `${this._brand} 车牌号为: ${this._vehicleNo}, 支付了 ${this._deposit} 元`
    );
  }

  public _showSafe(): void {
    console.log("安全规则...");
    console.log(`${this._brand} 车牌号为: ${this._vehicleNo}, 违规了`);
  }
}

class Car extends Vehicle {
  public _brand: string;
  public _vehicleNo: string;
  public _days: number;
  public _total!: number;
  public _deposit: number;
  public _kind: string;
  constructor(
    brand: string,
    vehicleNo: string,
    days: number,
    deposit: number,
    kind: string
  ) {
    super(brand, vehicleNo, days, deposit); // 继承的第一个好处就是可以复用父类的属性和方法 通过super调用父类的构造函数
    this._brand = brand;
    this._vehicleNo = vehicleNo;
    this._days = days;
    this._deposit = deposit;
    this._kind = kind;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get vehicleNo(): string {
    return this._vehicleNo;
  }

  set vehicleNo(value: string) {
    this._vehicleNo = value;
  }

  get days(): number {
    return this._days;
  }

  set days(value: number) {
    this._days = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get deposit(): number {
    return this._deposit;
  }

  set deposit(value: number) {
    this._deposit = value;
  }

  get kind(): string {
    return this._kind;
  }

  set kind(value: string) {
    this._kind = value;
  }

  /**
   * <h1>计算租金</h1>
   * 根据车的型号来获取租用一天该型号车的租金
   * @returns {number}
   */
  public _getPriceByKind(): number {
    if (this._kind === "普拉多") {
      return 800;
    } else if (this._kind === "凯美瑞") {
      return 400;
    } else if (this._kind === "宝来") {
      return 200;
    } else {
      return 0;
    }
  }
  // 继承的第二好处就是方法重写上 method override
  public _calculateRent(): number {
    // 任何一个实例对象变量（即 new 出来的实例）都有一个隐式原型对象 _proto_
    super._calculateRent(); // 调用父类的方法 Vehicle.prototype._calculateRent().call(this) prototype 原型对象空间

    return this._getPriceByKind() * this._days;
  }
}

const car = new Car("丰田", "京A12345", 3, 1000, "普拉多");
console.log("-> car", car);
console.log("-> car._calculateRent()", car._calculateRent());
