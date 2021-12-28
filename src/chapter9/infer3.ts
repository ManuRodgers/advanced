// infer 的使用3：直接用在泛型实现里面
class Subject {
  constructor(public name: string, public subId: number) {}
}

const chineseSubject = new Subject("语文", 1);
const mathSubject = new Subject("数学", 2);
const englishSubject = new Subject("英语", 3);
const setManuSubject = new Set<Subject>([
  chineseSubject,
  mathSubject,
  englishSubject
]);
// type ElementOf0<T> = T extends Set<infer E> ? E : never;
// const result: ElementOf0<typeof setManuSubject> = setManuSubject.values().next()
//   .value;
type InferType3<T> = T extends Set<infer E> ? E : never;
type TransitionType = typeof setManuSubject;
type InferTypeResult3 = InferType3<TransitionType>;
