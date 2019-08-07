{
    let data1: string = 'hoge';
    data1 = 'foo';
    data1 = 100; // Type '100' is not assignable to type 'string'.
    console.log(data1);
}

{
    let data2 = 100; // 型推論で number 型とみなす
    data2 = 150;
    data2 = 'hoge'; // Type '"hoge"' is not assignable to type 'number'.
    console.log(data2);
}

{
    let data3: any = 100; // any 型は本来は利用するべきではない
    data3 = 150;
    data3 = 'hoge'; // エラーにならない
    console.log(data3);
}

{
    let data4; // Variable 'data4' implicitly has an 'any' type, but a better type may be inferred from usage.
    data4 = 150;
    data4 = 'hoge';
    console.log(data4)
}

{
    let data5 = undefined; // 型推論で any 型が割り当てられる
    data5 = 150;
    data5 = 'hoge';
    console.log(data5); // エラーにならない
}

{
    let data; // any 型
    data = 10.5; // number 型とみなされる
    console.log(data.toFixed(0)); // number 型だから呼ぶことができる
    data = 'hoge'; // string 型とみなされる
    console.log(data.charAt(0)); // string 型だから呼ぶことができる
}

{
    let mail: string = 'admin@example.com';
    let msg = `レビュアー募集中!
書籍のご感想をぜひお聞かせください。
弊社サポートサイト、SNSなどで紹介させていただきます。
(送付先 : ${mail})`; // テンプレート文字列 & 埋め込み可能
    console.log(msg)
}


function show(result: string) {
    return `結果は${result}`;
}

{
    console.log(show(<any>100));
    console.log(show('100' as any));
}

function toInt(value: number) : string {
    return value.toFixed(0);
}

{
    console.log(toInt(<any>'hoge')); // コンパイルエラーにならないが実行時エラーになる -> toFixed が呼び出せないため
}

{
    if (true) {
        var i: number = 1; // let だとブロックスコープが働き、
    }
    console.log(i); // ここで呼び出せなくなる
}

{ // let は同じスコープ内での重複した変数宣言を認めない
    let let_x: number = 1;
    let let_x: number = 1; // Cannot redeclare block-scoped variable 'let_x'.
}

{ // var でも異なるデータ型で同名の変数宣言はできない
    var let_x: number = 1;
    var let_x: string = 'hoge'; // Subsequent variable declarations must have the same type.  Variable 'let_x' must be of type 'number', but here has type
}

{
    const DATA: number = 100;
    DATA = 108; // Cannot assign to 'DATA' because it is a constant.
    console.log(DATA)
}

{ // const は「再代入できない」であって、「変更できない」ではない
    const DATA = [1, 2, 3];
    DATA[0] = 10; // できる
}

{
    const DATA = [1, 2, 3];
    DATA = [10, 2, 3]; // これはできない
    console.log(DATA)
}

{ // 配列
    let data: string[] = ['Java', 'Python', 'PHP', 'Ruby', 'C#'];
    console.log(data[0]);
}
