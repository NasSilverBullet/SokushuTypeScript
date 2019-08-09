(() => { // function 命令
    function triangle(base: number, height: number) : number {
        return base * height / 2; // 型推論で number型とみなされる
    }

    console.log(triangle(10, 5)); // 25
})();


(() => { // 関数リテラル
    let triangle = function(base: number, height: number): number {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();

(() => { // 型を明示する(:functionとはならない)
    let triangle: (base: number, height: number) => number = function (base: number, height: number) {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();

(() => { // アロー関数(ラムダ式)
    let triangle = (base: number, height: number): number => {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();

(() => { // 上記を簡略化( statements が一行のときはreturn および{}を省略できる
    let triangle = (base: number, height: number): number => base * height / 2;
    console.log(triangle(10, 2));
})();

(() => { // function リテラルの場合下記のようにメソッド内でthisを使う場合、thisを退避する必要がある
    let Counter = function() {
        let _this = this;
        _this.count = 0;
        setInterval(function() {
            _this.count++;
        }, 1000);
    };
    console.log(Counter())
})();

(() => { // アロー関数ではthisは関数自身にはならず、宣言された場所(constructorが示すthis)になる
    let Counter = function() {
        this.count = 0;
        setInterval(() => { this.count++ }, 1000);
    };
    console.log(Counter());
})();
