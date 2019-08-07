{
    var data1 = 'hoge';
    data1 = 'foo';
    data1 = 100; // Type '100' is not assignable to type 'string'.
    console.log(data1);
}
{
    var data2 = 100; // 型推論で number 型とみなす
    data2 = 150;
    data2 = 'hoge'; // Type '"hoge"' is not assignable to type 'number'.
    console.log(data2);
}
{
    var data3 = 100; // any 型は本来は利用するべきではない
    data3 = 150;
    data3 = 'hoge'; // エラーにならない
    console.log(data3);
}
{
    var data4 = // Variable 'data4' implicitly has an 'any' type, but a better type may be inferred from usage.
     void 0; // Variable 'data4' implicitly has an 'any' type, but a better type may be inferred from usage.
    data4 = 150;
    data4 = 'hoge';
    console.log(data4);
}
{
    var data5 = undefined; // 型推論で any 型が割り当てられる
    data5 = 150;
    data5 = 'hoge';
    console.log(data5); // エラーにならない
}
{
    var data = // any 型
     void 0; // any 型
    data = 10.5; // number 型とみなされる
    console.log(data.toFixed(0)); // number 型だから呼ぶことができる
    data = 'hoge'; // string 型とみなされる
    console.log(data.charAt(0)); // string 型だから呼ぶことができる
}
{
    var mail = 'admin@example.com';
    var msg = "\u30EC\u30D3\u30E5\u30A2\u30FC\u52DF\u96C6\u4E2D!\n\u66F8\u7C4D\u306E\u3054\u611F\u60F3\u3092\u305C\u3072\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002\n\u5F0A\u793E\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8\u3001SNS\u306A\u3069\u3067\u7D39\u4ECB\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\n(\u9001\u4ED8\u5148 : " + mail + ")"; // テンプレート文字列 & 埋め込み可能
    console.log(msg);
}
