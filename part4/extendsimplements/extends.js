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
{ // 継承
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
    // Personクラスを継承した BusinessPersonクラス
    var BusinessPerson = /** @class */ (function (_super) {
        __extends(BusinessPerson, _super);
        function BusinessPerson() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BusinessPerson.prototype.work = function () {
            return this.name + "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059\u3002";
        };
        return BusinessPerson;
    }(Person));
    var p = new BusinessPerson('理央', '女');
    console.log(p.show());
    console.log(p.work());
}
{ // メソッドのオーバーライド
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
    // Personクラスを継承した BusinessPersonクラス
    var BusinessPerson = /** @class */ (function (_super) {
        __extends(BusinessPerson, _super);
        // コンストラクタをオーバーライド
        function BusinessPerson(name, sex, clazz) {
            var _this = _super.call(this, name, sex) || this;
            _this.clazz = clazz;
            return _this;
        }
        // showメソッドをオーバーライド
        BusinessPerson.prototype.show = function () {
            return _super.prototype.show.call(this) + (this.clazz + "\u3067\u3059\u3002");
        };
        return BusinessPerson;
    }(Person));
    var p = new BusinessPerson('理央', '女', '主任');
    console.log(p.show()); // 理央は女です。主任です。
}
{ // 抽象メソッド
    // 抽象クラスを宣言
    var Figure = /** @class */ (function () {
        function Figure(width, height) {
            this.width = width;
            this.height = height;
        }
        return Figure;
    }());
    // FIgure クラスを継承
    var Triangle = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Triangle.prototype.getArea = function () {
            return this.width * this.height / 2;
        };
        return Triangle;
    }(Figure));
    var t = new Triangle(10, 5);
    console.log(t.getArea());
}
