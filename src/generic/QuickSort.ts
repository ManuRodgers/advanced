// 英文、数字数组排序
function quickSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const left = array.slice(1).filter(item => item < pivot);
  const right = array.slice(1).filter(item => item >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const numberArr = [3, 1, 8, 9, 20, 15, 2, 7, 13, 11, 19, 18, 5, 6, 17, 4];
quickSort<number>(numberArr);
let strArr: string[] = ["cba", "kkdf", "ndf", "bcdf", "dfd", "cdf"];
quickSort<string>(strArr);

const chineseArr = ["武汉", "郑州", "太原", "济南", "沈阳", "大连"];
//   中文排序
function sortChinese<T>(array: T[]): T[] {
  return array.sort((a, b) => (a as any).localeCompare(b, "zh-Hans-CN"));
}
sortChinese<string>(chineseArr);

function stringSelfSort(str: string, count: number = 10): string {
  const strResult = quickSort(str.split("")).join("");
  return strResult.length > count
    ? strResult.substring(0, count) + "..."
    : strResult;
}

function isString(data: unknown): data is string {
  return typeof data === "string";
}

function isArray(data: unknown): data is unknown[] {
  return data instanceof Array;
}

function hasChineseWithinArray<T>(array: T[]): boolean {
  return array.some(item => isString(item) && /[\u4e00-\u9fa5]+/g.test(item));
}

// 泛型函数重载
// 中文+英文、数字数组排序混合方法
// 分工明确
// 函数重载， 你给外面提供的都是函数的重载签名，然后实现签名来具体实现每一个不同的函数, 重载签名就是起到了传递实际参数的作用
function sort<T>(data: T, count?: number): T;
function sort(data: unknown, count: number = 10): unknown {
  if (isString(data)) {
    return stringSelfSort(data);
  }
  if (isArray(data)) {
    if (hasChineseWithinArray(data)) {
      return sortChinese(data);
    }
    let newArr = data.map(item => {
      return isString(item) ? stringSelfSort(item, count) : item;
    });
    //英文、数字数组排序
    return quickSort(newArr as any);
  }
}

sort(numberArr);
sort(strArr);
sort(chineseArr);

strArr.forEach(item => {});
