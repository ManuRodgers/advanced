const [username, age, ...rest]: [name_:string,age_: number, ...rest:any[], dob_: string] = [
  "John",
  30,
  "173cm",
  "68kg",
  451962387,
  "1991/04/30"
];
console.log("-> username", username);
console.log("-> age", age);
console.log("-> rest", rest);
export {};
