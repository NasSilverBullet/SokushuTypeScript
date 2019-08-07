{ // 配列
    var data = ['Java', 'Python', 'PHP', 'Ruby', 'Ruby', 'C#'];
    console.log(data[0]);
}
{ // ジェネリクス(基本は上の配列リテラルを使う)
    var data = ['Java', 'Python', 'PHP', 'Ruby', 'Ruby', 'C#'];
    console.log(data);
}
{ // 行列、テンソルはこのように書く
    var data = [
        [10, 20],
        [30, 40],
        [50, 60],
    ];
    console.log(data[1][1]); // 40
}
{ // Array コンストラクター
    var data = new Array(5, 10, 15);
    console.log(data);
}
{ // 要素5、10、15 の配列 (わかりにくいので Array コンストラクターは避ける)
    var data = new Array(5, 10, 15);
    console.log(data);
    // let data: number[] = []; 空の配列は空のブランケットで表現
}
