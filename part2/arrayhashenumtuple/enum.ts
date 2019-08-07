{ // 列挙型
    enum Sex {
        MALE,
        FEMALE,
        UNKNOWN
    }
    let m: Sex = Sex.MALE;
    console.log(m); // 0 <- 列挙値
    console.log(Sex[m]); // MALE <- 列挙子
}
