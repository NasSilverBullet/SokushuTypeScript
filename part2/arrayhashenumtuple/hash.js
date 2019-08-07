{ // 連想配列
    var obj = {
        'hoge': 'ほげ',
        'foo': 'ふぅ',
        'bar': 'ばぁ'
    };
    console.log(obj.hoge); // プロパティ構文
    console.log(obj['hoge']); // ブランケット構文
}
{ // interface を使うことで型として用意する事ができる
    var obj = {
        'hoge': 'ほげ',
        'foo': 'ふぅ',
        'bar': 'ばぁ'
    };
    console.log(obj.hoge);
}
