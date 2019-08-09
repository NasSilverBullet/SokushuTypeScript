(() => { // 引数省略を実装に落とし込む場合下記のようにしていたが、
    function showTime(time: Date): string {
        if (time === undefined) {
            return '現在時刻:' + (new Date()).toLocaleDateString();
        } else {
            return '現在時刻:' + time.toLocaleDateString();
        }
    }
    console.log(showTime()); // Expected 1 arguments, but got 0.
})();

(() => { // ? をつけることで任意の引数とみなされる
    function showTime(time?: Date): string {
        if (time === undefined) {
            return '現在時刻:' + (new Date()).toLocaleDateString();
        } else {
            return '現在時刻:' + time.toLocaleDateString();
        }
    }
    console.log(showTime());
})();

(() => { // デフォルト値構文を使うことで引数がなかったときの処理を書く必要がなくなる
    function showTime(time: Date = new Date()): string { // デフォルト値には式を指定できる
        return '現在時刻:' + time.toLocaleDateString();
    }
    console.log(showTime());
})();

(() => { // 前に出てきた引数をデフォルト値として使える
    function add(x: number =1, y: number =x) {
        console.log(x, y);
    }{}
    add(1);
})();

(() => { // まだ定義されていない変数はデフォルト値として使えない
    function add(x: number = y, y: number = 1) { // Initializer of parameter 'x' cannot reference identifier 'y' declared after it.
        console.log(x, y);
    }
    add(1);
})();

// デフォルト値ありの引数は引数リストの末尾に書く!



(() => { // 可変長引数 受け取るときは配列になる
    function sum(...values: number[]) {
        let result = 0;
        for (let value of values) {
            result += value;
        }
        return result;
    }
    console.log(sum(1, 5, -8, 10)); // 8
})();
