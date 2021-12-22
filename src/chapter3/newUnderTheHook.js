function Person(phone, age) {
  this.phone = phone;
  this.age = age;
  this.show = function() {
    console.log(this.phone, this.age);
  };
}

Person.prototype.eat = function() {
  console.log("eat");
};
const p = new Person("123", 18);
console.log("-> p", p);

const obj = {};
console.log("-> obj", obj);
obj._proto_ = Person.prototype;

Person.apply(obj, ["123", 18]);
console.log("-> obj", obj.phone, obj.age);
