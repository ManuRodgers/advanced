type objtype1 = { username: string; age: number; [key: string]: unknown };
type objtype2 = {
  custname: string;
  phone: number;
  age: number;
  [key: string]: unknown;
};
type objtype3 = { weixin: string };

const obj = {};
const combine1 = obj as objtype1 & objtype2;
const combine2 = combine1 as typeof combine1 & objtype3;

const first: objtype1 = { username: "manu", age: 0 };
const second: objtype2 = { custname: "tim", phone: 0, age: 0 };
Object.keys(first).forEach(key => {
  combine1[key] = first[key];
});
console.log("-> combine1", combine1);
Object.keys(second).forEach(key => {
  combine1[key] = second[key];
});
console.log("-> combine1", combine1);

interface Button {
  btntype: string;
  text: string;
}
interface Link {
  alt: string;
  href: string;
}
interface Href {
  linktype: string;
  target: Openlocation;
}
enum Openlocation {
  self = 0,
  _blank,
  parent
}
let button: Button = {
  btntype: "normal",
  text: "跳转到百度"
};
let link: Link = {
  alt: "goto baidu",
  href: "http://www.baidu.com"
};
let href: Href = {
  linktype: "外网",
  target: Openlocation._blank
};

type Union<T> = Extract<T, object>;
function cross<T, U>(t: Union<T>, u: Union<U>): T & U;
function cross<T, U, V>(t: Union<T>, u: Union<U>, v: Union<V>): T & U & V;
function cross<T, U, V>(t: T, u: U, v?: V) {
  const obj = {};
  const result = obj as T & U;
  Object.keys(t).forEach(key => {
    result[key] = t[key];
  });

  Object.keys(u).forEach(key => {
    if (!result.hasOwnProperty(key)) {
      result[key] = u[key];
    }
  });

  if (v) {
    const result2 = result as typeof result & V;
    Object.keys(v).forEach(key => {
      if (!result.hasOwnProperty(key)) {
        result[key] = v[key];
      }
    });
    return result2; // 三个对象交叉以后的结果
  }

  return result; // 两个对象交叉以后的结果
}

const res1 = cross(button, link);
console.log("-> res1", res1);
const res2 = cross(button, link, href);
console.log("-> res2", res2);
