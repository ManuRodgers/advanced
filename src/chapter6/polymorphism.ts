class People {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  public eat(): void {
    console.log(`people is eating.`);
  }
}

class AmericanPeople extends People {
  public phone: string;
  constructor(name: string, phone: string) {
    super(name);
    this.phone = phone;
  }
  public eat(): void {
    console.log(`American people is eating with fork`);
  }
}

class ChinesePeople extends People {
  public eat(): void {
    console.log(`Chinese people is eating with chopsticks`);
  }
}

class IndianPeople extends People {
  public eat(): void {
    console.log(`Indian people is eating with hand`);
  }
}

// 满足多态的条件有两点：1. 必须要有继承关系；2. 必须要有方法重写
// 如果没有继承关系，那么就不满足多态的条件
// 如果没有重写方法，那么就不满足多态的条件
// 如果有继承关系，但是没有重写方法，那么就不满足多态的条件
// 父类对象 people 可以接受任何一个子类对象
// 例如可以接受 AmericanPeople 对象， ChinesePeople 对象， IndianPeople 对象
let people: People = new AmericanPeople("Tom", "123456789");
people.eat();
people = new ChinesePeople("Jack");
people.eat();
people = new IndianPeople("Jim");
people.eat();
// 多态的好处：局部实现了开闭原则--对修改关闭，对扩展开放
// 多态的局限性: 无法直接调用子类的独有的方法， 必须结合 instanceof 操作符 类型守卫来判断
