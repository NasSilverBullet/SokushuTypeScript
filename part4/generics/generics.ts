{ // ジェネリクス型の定義
    // <T> 型引数 あとから型を受け取るための仮引数
    // 名前は自由に決められる <T> Type とか <E> Element とか
    class MyGenerics<T> {
        value: T;
        getValue(): T {
            return this.value;
        }
    }
    let g = new MyGenerics<string>();
    g.value = 'Hoge';
    console.log(g.getValue()); // Hoge
}

{ // 複数の型引数も可能
    class MyGenerics<T, R> {}
    let g = new MyGenerics<string, number>();
}

{ // 型引数の制約
    class Hoge {}
    class FooBar extends Hoge {}
    // Hoge 及びその子クラスのみを受け付けるジェネリクス
    class MyGenerics<T extends Hoge> {
        value: T;
        getValue(): T {
            return this.value;
        }
    }
    let g = new MyGenerics<FooBar>();
    g.value = new FooBar();
    console.log(g.getValue());
}

// ジェネリクスメソッド
// メソッドの引数/戻り値、ローカル変数の型をメソッドの呼び出しの際に決められるメソッド
{
    class MyCollection { // 非ジェネリクス型のMyCollection クラス
        static addAll<T>(data: T[], ...values: T[]): T[] {
            return data.concat(values);
        }
    }
    let x = [10, 15, 30];
    // １つ目の引数から型推論を行っている
    console.log(MyCollection.addAll(x, 35, 50)); // 10, 15, 30, 35, 50
    // 別にこれでも良い
    console.log(MyCollection.addAll<number>(x, 35, 50)); // 10, 15, 30, 35, 50
}

{ // オブジェクトのマージ
    function merge<T, R>(obj1: T, obj2: R): T & R {
        let result = <T & R>{}; // 交差型 -> 与えられた方を統合した型

        // obj1 を results にコピー
        for (let key in obj1) {
            (<any>result)[key] = obj1[key];
        }
        // obj2 を results にコピー
        for (let key in obj2) {
            (<any>result)[key] = obj2[key];
        }
        return result;
    }

    class Book {
        constructor(private title: string, private price: number) {}
        toString() {
            return this.title + ' ' + this.price;
        }
    }

    class Logger {
        debug() {
            console.log(this.toString);
        }
    }
    let m = merge(new Book('Javascript本格入門', 2980), new Logger());
    console.log(m); // { price :2980, title: "JavaScript本格入門", toString:function()}
}
