var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{ // ジェネリクス型の定義
    // <T> 型引数 あとから型を受け取るための仮引数
    // 名前は自由に決められる <T> Type とか <E> Element とか
    var MyGenerics = /** @class */ (function () {
        function MyGenerics() {
        }
        MyGenerics.prototype.getValue = function () {
            return this.value;
        };
        return MyGenerics;
    }());
    var g = new MyGenerics();
    g.value = 'Hoge';
    console.log(g.getValue()); // Hoge
}
{ // 複数の型引数も可能
    var MyGenerics = /** @class */ (function () {
        function MyGenerics() {
        }
        return MyGenerics;
    }());
    var g = new MyGenerics();
}
{ // 型引数の制約
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    var FooBar = /** @class */ (function (_super) {
        __extends(FooBar, _super);
        function FooBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FooBar;
    }(Hoge));
    // Hoge 及びその子クラスのみを受け付けるジェネリクス
    var MyGenerics = /** @class */ (function () {
        function MyGenerics() {
        }
        MyGenerics.prototype.getValue = function () {
            return this.value;
        };
        return MyGenerics;
    }());
    var g = new MyGenerics();
    g.value = new FooBar();
    console.log(g.getValue());
}
// ジェネリクスメソッド
// メソッドの引数/戻り値、ローカル変数の型をメソッドの呼び出しの際に決められるメソッド
{
    var MyCollection = /** @class */ (function () {
        function MyCollection() {
        }
        MyCollection.addAll = function (data) {
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            return data.concat(values);
        };
        return MyCollection;
    }());
    var x = [10, 15, 30];
    // １つ目の引数から型推論を行っている
    console.log(MyCollection.addAll(x, 35, 50)); // 10, 15, 30, 35, 50
    // 別にこれでも良い
    console.log(MyCollection.addAll(x, 35, 50)); // 10, 15, 30, 35, 50
}
{ // オブジェクトのマージ
    function merge(obj1, obj2) {
        var result = {}; // 交差型 -> 与えられた方を統合した型
        // obj1 を results にコピー
        for (var key in obj1) {
            result[key] = obj1[key];
        }
        // obj2 を results にコピー
        for (var key in obj2) {
            result[key] = obj2[key];
        }
        return result;
    }
    var Book = /** @class */ (function () {
        function Book(title, price) {
            this.title = title;
            this.price = price;
        }
        Book.prototype.toString = function () {
            return this.title + ' ' + this.price;
        };
        return Book;
    }());
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        return Logger;
    }());
    var m = merge(new Book('Javascript本格入門', 2980), new Logger());
    console.log(m); // { price :2980, title: "JavaScript本格入門", toString:function()}
}
