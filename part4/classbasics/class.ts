{ // クラスを定義する
    class Person {
        name: string;
        sex: string;
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }

        show() {
            return `${this.name}は${this.sex}です。`;
        }
    }
    let p   = new Person('理央', '女');
    console.log(p.show);
}

{ // アクセス修飾子
    class Person {
        private name: string;
        private sex: string;
        constructor(name: string, sex: string) {
            this.name = name;
            this.sex = sex;
        }
        public show(): string { // public はデフォルトの修飾子のため、省略できる
            return `${this.name}は${this.sex}です。`;
        }
    }
    let p = new Person('理央', '女');
    console.log(p.show()); // 理央は女です。
    console.log(p.name()); // Property 'name' is private and only accessible within class 'Person'.
}

{ // コンストラクタのsyntax suger
    class Person {
        // プロパティの宣言と初期化が同時にできる(引数とプロパティが同名)
        constructor(private name: string, private sex: string) {
        }
        public show(): string { // public はデフォルトの修飾子のため、省略できる
            return `${this.name}は${this.sex}です。`;
        }
    }
    let p = new Person('理央', '女');
    console.log(p.show()); // 理央は女です。
}

{ // getter / setter アクセサー
    class Person {
        private _age: number
        get age(): number {          // get keyword
            return this._age;
        }

        set age(value: number) {     // age keyword
            if (value < 0) {
                throw new RangeError('ageプロパティは正数で指定してください。');
            }
            this._age = value;
        }
    }
    let p = new Person();
    p.age = 10;          // それぞれ`age()`みたいには書かない
    console.log(p.age);
}

{ //静的メンバー
    class Figure {
        public static Pi: number = 3.14159;
        public static circle(radius: number) {
            return radius * radius * this.Pi;
        }
    }
    console.log(Figure.Pi); // 3.14159
    console.log(Figure.circle(5)); // 78.53975
}

// 名前空間
namespace MainApp {
    export class Hoge {} // export keyword がないと名前空間配下の要素へアクセスできない
    export function foo() {}
    function bar() {}
}
let h = new MainApp.Hoge();
MainApp.foo();
MainApp.bar(); // Property 'bar' does not exist on type 'typeof MainApp'.

// 階層構造のある名前空間
namespace Wings.MainApp {
    export class Hoge {}
    export function foo() {}
}
let j = new Wings.MainApp.Hoge();
Wings.MainApp.foo();

// namespace のネスト(複数を含めるときはこちらのほうが良さそう
namespace Wings2 {
    export namespace MainApp {
        export class Hoge{};
        export function foo() {};
    };
}
