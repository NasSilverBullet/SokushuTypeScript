{ // 連想配列
    let obj: {[index: string]: string;} = { // { [key: string]: string;} でも可能
        'hoge': 'ほげ',
        'foo': 'ふぅ',
        'bar': 'ばぁ'
    }
    console.log(obj.hoge); // プロパティ構文
    console.log(obj['hoge']); // ブランケット構文
}

{ // interface を使うことで型として用意する事ができる
    interface StringMap { // 何度も使う場合は有功
        [index: string]: string;
    }
    let obj: StringMap = {
        'hoge': 'ほげ',
        'foo': 'ふぅ',
        'bar': 'ばぁ'
    };
    console.log(obj.hoge);
}
