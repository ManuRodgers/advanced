// 自定义守卫函数, data is "Type" 返回的是 boolean 类型， 但是比返回 boolean 类型增加了一层类型检查
function isString(data: any): data is string {
  return typeof data === "string";
}

function isFunction(data: any): data is Function {
  return typeof data === "function";
}

const arr = [1, 2, 3, 4, "manu"] as const;
console.log("-> arr", arr);
// arr = [2, 2, 3, 4, "manu"];
// arr[0] = 20;
// console.log("-> arr", arr);

function test(data: readonly [number, number, number, number, string]) {
  console.log("-> data", data);
}
test(arr);
