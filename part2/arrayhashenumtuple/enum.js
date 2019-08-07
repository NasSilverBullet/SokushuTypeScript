{ // 列挙型
    var Sex = void 0;
    (function (Sex) {
        Sex[Sex["MALE"] = 0] = "MALE";
        Sex[Sex["FEMALE"] = 1] = "FEMALE";
        Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
    })(Sex || (Sex = {}));
    var m = Sex.MALE;
    console.log(m); // 0 <- 列挙値
    console.log(Sex[m]); // MALE <- 列挙子
}
