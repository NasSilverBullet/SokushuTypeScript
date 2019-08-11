// 複数のクラスを継承することはできない。
// 複数のインターフェイスは継承することができる。(実装すると言う)
// インターフェイス : すべてのメソッドが抽象メソッドであるクラス

{
    // interface
    interface Figure {
        // メソッドはすべて抽象 -> abstract 修飾子いらない
        getArea(): number;
        // プロパティはすべてpublic -> public 就職子はいらない
    }

    // Figure interface を実装
    class Triangle implements Figure {
        constructor(private width: number, private height: number) {  }
        getArea(): number {
            return this.width * this.height / 2;
        }
    }
    let t = new Triangle(10, 5);
    console.log(t.getArea()); // 25
}

{ // 複数のinterfaceの実装
    interface Foo {};
    interface Bar {};
    class Hoge implements Foo, Bar {};
}

{ // inteface の継承
    interface Foo {};
    interface Bar {};
    interface Hoge extends Foo, Bar {};
}

{ // 構造的部分型( implements keyword が不要 -> Go と同じ)
    interface Figure {
        getArea(): number;
    }

    class Triangle {
        constructor(private width: number, protected height: number) {}
        getArea(): number {
            return this.width * this.height / 2;
        }
    }
    let t: Figure = new Triangle(10, 5); // Figure 型の変数に代入できる
    console.log(t.getArea());
}
// * C#, Javaのように implements keyword を使うアプローチは公称的部分型

{ // 型注釈としてのインターフェイス
    interface Car {
        type: string; // プロパティシグニチャ
        run(): void; // メソッドシグニチャ
    }
    // implements するのではなく、interfaceブロックで定義
    let c: Car = { // Car型の変数にオブジェクトを代入
        type: 'トラック',
        run() {
            console.log(`${this.type}が走ります。`);
        }
    }
    c.run(); // トラックが走ります
}

{ // オブジェクト型リテラル
    // その場限りの型定義となる
    let c1: {type: string, /* , ではなく ; でも可能 **/ weight: number} = { type: '軽トラック', weight: 750 };
    console.log(c1);
}

{ // オブジェクト型リテラルを使用することで、
  // クラスに定義したメソッドへのアクセスを禁止することができる
    class MyClass {
        hoge(): void {};
        foo(): void {};
    }
    let x: { hoge(): void; } = new MyClass();
    x.hoge();
    x.foo(); // Property 'foo' does not exist on type '{ hoge(): void; }
}

{ // 型としてのthis (メソッドチェーン)
    class MyClass {
        constructor(private _value: number) {};
        get value(): number {
            return this._value;
        }
        add(value: number): this {
            this._value += value;
            returnturn this;
        }
        minus(value: number): this {
            this._value -= value;
            return this;
        }
    }
    let clazz = new MyClass(10);
    console.log(clazz.add(10).minus(5).value);
}
