// 複数のクラスを継承することはできない。
// 複数のインターフェイスは継承することができる。(実装すると言う)
// インターフェイス : すべてのメソッドが抽象メソッドであるクラス
{
    // Figure interface を実装
    var Triangle = /** @class */ (function () {
        function Triangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Triangle.prototype.getArea = function () {
            return this.width * this.height / 2;
        };
        return Triangle;
    }());
    var t = new Triangle(10, 5);
    console.log(t.getArea()); // 25
}
{ // 複数のinterfaceの実装
    ;
    ;
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    ;
}
{ // inteface の継承
    ;
    ;
    ;
}
{ // 構造的部分型( implements keyword が不要 -> Go と同じ)
    var Triangle = /** @class */ (function () {
        function Triangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Triangle.prototype.getArea = function () {
            return this.width * this.height / 2;
        };
        return Triangle;
    }());
    var t = new Triangle(10, 5); // Figure 型の変数に代入できる
    console.log(t.getArea());
}
// * C#, Javaのように implements keyword を使うアプローチは公称的部分型
{ // 型注釈としてのインターフェイス
    // implements するのではなく、interfaceブロックで定義
    var c = {
        type: 'トラック',
        run: function () {
            console.log(this.type + "\u304C\u8D70\u308A\u307E\u3059\u3002");
        }
    };
    c.run(); // トラックが走ります
}
{ // オブジェクト型リテラル
    // その場限りの型定義となる
    var c1 = { type: '軽トラック', weight: 750 };
    console.log(c1);
}
{ // オブジェクト型リテラルを使用することで、
    // クラスに定義したメソッドへのアクセスを禁止することができる
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.hoge = function () { };
        ;
        MyClass.prototype.foo = function () { };
        ;
        return MyClass;
    }());
    var x = new MyClass();
    x.hoge();
    x.foo(); // Property 'foo' does not exist on type '{ hoge(): void; }
}
{ // 型としてのthis (メソッドチェーン)
    var MyClass = /** @class */ (function () {
        function MyClass(_value) {
            this._value = _value;
        }
        ;
        Object.defineProperty(MyClass.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        MyClass.prototype.add = function (value) {
            this._value += value;
            returnturn;
            this;
        };
        MyClass.prototype.minus = function (value) {
            this._value -= value;
            return this;
        };
        return MyClass;
    }());
    var clazz = new MyClass(10);
    console.log(clazz.add(10).minus(5).value);
}
