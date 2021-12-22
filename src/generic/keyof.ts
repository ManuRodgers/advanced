// typeof 后面是一个对象变量， keyof 后面是一个类型，对象类型或者接口，结果是这些的属性名称的联合类型
const manu = { name: "Manu", age: 29 };
type ManuKeys = keyof typeof manu;
