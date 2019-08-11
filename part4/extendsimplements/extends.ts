{ // 継承
    class Person {
        protected name: string;
        protected sex: string;
        constructor(name: string, sex: string) {
            this.name = name;
            this.sex = sex;
        }
        show(): string {
            return `${this.name}は${this.sex}です。`;
        }
    }

    // Personクラスを継承した BusinessPersonクラス
    class BusinessPerson extends Person {
        work(): string {
            return `${this.name}はテキパキ働きます。`;
        }
    }
    let p = new BusinessPerson('理央', '女');
    console.log(p.show());
    console.log(p.work());
}

{ // メソッドのオーバーライド
    class Person {
        protected name: string;
        protected sex: string;
        constructor(name: string, sex: string) {
            this.name = name;
            this.sex = sex;
        }
        show(): string {
            return `${this.name}は${this.sex}です。`;
        }
    }

    // Personクラスを継承した BusinessPersonクラス
    class BusinessPerson extends Person {
        protected clazz: string;
        // コンストラクタをオーバーライド
        constructor(name: string, sex: string, clazz: string) {
            super(name, sex);
            this.clazz = clazz;
        }
        // showメソッドをオーバーライド
        show(): string {
            return super.show() + `${this.clazz}です。`;
        }
    }
    let p = new BusinessPerson('理央', '女', '主任');
    console.log(p.show()); // 理央は女です。主任です。
}


{ // 抽象メソッド
    // 抽象クラスを宣言
    abstract class Figure {
        constructor(protected width: number, protected height: number) {}
        abstract getArea(): number; // オーバーライドされないとコンパルエラーとなる
    }
    // FIgure クラスを継承
    class Triangle extends Figure {
        getArea(): number {
            return this.width * this.height / 2;
        }
    }
    let t = new Triangle(10, 5);
    console.log(t.getArea())
}
