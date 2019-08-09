(function () {
    function showTime(time) {
        if (time === undefined) {
            return '現在時刻:' + (new Date()).toLocaleDateString();
        }
        else {
            return '現在時刻:' + time.toLocaleDateString();
        }
    }
    console.log(showTime()); // Expected 1 arguments, but got 0.
})();
(function () {
    function showTime(time) {
        if (time === undefined) {
            return '現在時刻:' + (new Date()).toLocaleDateString();
        }
        else {
            return '現在時刻:' + time.toLocaleDateString();
        }
    }
    console.log(showTime());
})();
(function () {
    function showTime(time) {
        if (time === void 0) { time = new Date(); }
        return '現在時刻:' + time.toLocaleDateString();
    }
    console.log(showTime());
})();
(function () {
    function add(x, y) {
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = x; }
        console.log(x, y);
    }
    { }
    add(1);
})();
(function () {
    function add(x, y) {
        if (x === void 0) { x = y; }
        if (y === void 0) { y = 1; }
        console.log(x, y);
    }
    add(1);
})();
// デフォルト値ありの引数は引数リストの末尾に書く!
(function () {
    function sum() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var result = 0;
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            result += value;
        }
        return result;
    }
    console.log(sum(1, 5, -8, 10)); // 8
})();
