(function () {
    function triangle(base, height) {
        return base * height / 2; // 型推論で number型とみなされる
    }
    console.log(triangle(10, 5)); // 25
})();
(function () {
    var triangle = function (base, height) {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();
(function () {
    var triangle = function (base, height) {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();
(function () {
    var triangle = function (base, height) {
        return base * height / 2;
    };
    console.log(triangle(10, 5));
})();
(function () {
    var triangle = function (base, height) { return base * height / 2; };
    console.log(triangle(10, 2));
})();
(function () {
    var Counter = function () {
        var _this = this;
        _this.count = 0;
        setInterval(function () {
            _this.count++;
        }, 1000);
    };
    console.log(Counter());
})();
(function () {
    var Counter = function () {
        var _this_1 = this;
        this.count = 0;
        setInterval(function () { _this_1.count++; }, 1000);
    };
    console.log(Counter());
})();
