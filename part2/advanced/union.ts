{ // 共有型 (Union Types)
    let data: string | boolean;
    data = 'hoge'; // 問題なし
    data = false; // 問題なし
    data = 1; // Type '1' is not assignable to type 'string | boolean'.
    console.log(data);
}

{ // any 型は使わない
    let data: any;
    data = 'hoge';
    data = false;
    data = 1; // これをエラーとしたくてもできない
    console.log(data);
}

{ // 配列も可能
    let data: (string | number)[] = ['ほげ', 108, 'hoge'];
    console.log(data);
}
