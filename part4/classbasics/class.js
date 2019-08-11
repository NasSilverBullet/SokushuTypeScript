{ // クラスを定義する
    var Person = /** @class */ (function () {
        function Person(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Person.prototype.show = function () {
            return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
        };
        return Person;
    }());
    var p = new Person('理央', '女');
    console.log(p.show);
}
{ // アクセス修飾子
    var Person = /** @class */ (function () {
        function Person(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Person.prototype.show = function () {
            return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
        };
        return Person;
    }());
    var p = new Person('理央', '女');
    console.log(p.show()); // 理央は女です。
    console.log(p.name()); // Property 'name' is private and only accessible within class 'Person'.
}
{ // コンストラクタのsyntax suger
    var Person = /** @class */ (function () {
        // プロパティの宣言と初期化が同時にできる(引数とプロパティが同名)
        function Person(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Person.prototype.show = function () {
            return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
        };
        return Person;
    }());
    var p = new Person('理央', '女');
    console.log(p.show()); // 理央は女です。
}
{ // getter / setter アクセサー
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value < 0) {
                    throw new RangeError('ageプロパティは正数で指定してください。');
                }
                this._age = value;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person();
    p.age = 10; // それぞれ`age()`みたいには書かない
    console.log(p.age);
}
{ //静的メンバー
    var Figure = /** @class */ (function () {
        function Figure() {
        }
        Figure.circle = function (radius) {
            return radius * radius * this.Pi;
        };
        Figure.Pi = 3.14159;
        return Figure;
    }());
    console.log(Figure.Pi); // 3.14159
    console.log(Figure.circle(5)); // 78.53975
}
// 名前空間
var MainApp;
(function (MainApp) {
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }()); // export keyword がないと名前空間配下の要素へアクセスできない
    MainApp.Hoge = Hoge;
    function foo() { }
    MainApp.foo = foo;
    function bar() { }
})(MainApp || (MainApp = {}));
var h = new MainApp.Hoge();
MainApp.foo();
MainApp.bar(); // Property 'bar' does not exist on type 'typeof MainApp'.
// 階層構造のある名前空間
var Wings;
(function (Wings) {
    var MainApp;
    (function (MainApp) {
        var Hoge = /** @class */ (function () {
            function Hoge() {
            }
            return Hoge;
        }());
        MainApp.Hoge = Hoge;
        function foo() { }
        MainApp.foo = foo;
    })(MainApp = Wings.MainApp || (Wings.MainApp = {}));
})(Wings || (Wings = {}));
var j = new Wings.MainApp.Hoge();
Wings.MainApp.foo();
// namespace のネスト(複数を含めるときはこちらのほうが良さそう
var Wings2;
(function (Wings2) {
    var MainApp;
    (function (MainApp) {
        var Hoge = /** @class */ (function () {
            function Hoge() {
            }
            return Hoge;
        }());
        MainApp.Hoge = Hoge;
        ;
        function foo() { }
        MainApp.foo = foo;
        ;
    })(MainApp = Wings2.MainApp || (Wings2.MainApp = {}));
    ;
})(Wings2 || (Wings2 = {}));
