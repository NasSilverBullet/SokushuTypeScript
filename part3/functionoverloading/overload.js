(function () {
    function show(value) {
        if (typeof value === 'number') {
            console.log(value.toFixed(0));
        }
        else {
            console.log(value ? '真' : '偽');
        }
    }
    show(10.358); // 10
    show(false); // 偽
    show('ほげ'); // Argument of type '"ほげ"' is not assignable to parameter of type 'boolean'.
})();
// 引数/戻り値型としての共用型
(function () {
    function square(value) {
        if (value < 0) {
            return false;
        }
        else {
            return Math.sqrt(value);
        }
    }
    console.log(square(9));
    console.log(square(-9));
})();
(function () {
    function show(value) {
        if (typeof value === 'number') {
            console.log(value.toFixed(0));
        }
        else {
            console.log(value ? '真' : '偽');
        }
    }
})();
(function () {
    function process(value) {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        else {
            return value.toFixed(1);
        }
    }
    console.log(process(100));
    console.log('abc');
});
//クラス型の判定では instanceof を使う
