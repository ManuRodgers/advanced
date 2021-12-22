// 如果你发现某一个类实例化以后没有任何的意义，你就可以把这个类抽象成抽象类。
// 抽象类不能被实例化，可以拥有抽象方法，抽象类只有被子类继承以后才能被实例化
interface MouseListenerProcess {
  mouseRelease(event: MouseEvent): void;
  mousePress(event: MouseEvent): void;
  mouseMove(event: MouseEvent): void;
  mouseClick(event: MouseEvent): void;
  mouseDoubleClick(event: MouseEvent): void;
}
// 后端一般可以用一个抽象类来实现一个接口，然后将那些必须要实现的方法搞成抽象方法，然后子类继承这个抽象类，实现那些必须实现的方法。
// 其中一个抽象类就可以叫做适配器。
abstract class MouseListenerProcessAdapter implements MouseListenerProcess {
  abstract mouseClick(event: MouseEvent): void;

  abstract mouseMove(event: MouseEvent): void;

  mouseDoubleClick(event: MouseEvent): void {}

  mousePress(event: MouseEvent): void {}

  mouseRelease(event: MouseEvent): void {}
}

class MouseListenerProcessImpl extends MouseListenerProcessAdapter {
  mouseClick(event: MouseEvent): void {
    console.log("mouse click");
  }

  mouseMove(event: MouseEvent): void {
    console.log("mouse move");
  }
}
