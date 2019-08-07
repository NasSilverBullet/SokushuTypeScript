{ // タプル型 => 複数の型が混在したタプル型
    var data = ['hoge', 10.355, false];
    console.log(data[0].substring(2)); // ge
    console.log(data[1].toFixed(1)); // 10.4
    console.log(data[2] === false); // true
}
{ // 複雑な操作には耐えられないため、基本的にクラスとして定義したほうがい良い
    var data = ['hoge', 10.355, false];
    data.shift();
    console.log(data[0].substring(2)); // コンパイルエラーにはならないが、
    // data[0]は依然としてstring型とみなされるため、実行時エラーになる
}
