// 配列
{ // 配列
    let data: string[] = ['Java', 'Python', 'PHP', 'Ruby', 'Ruby', 'C#'];
    console.log(data[0]);
}

{ // ジェネリクス(基本は上の配列リテラルを使う)
    let data: Array<string> = ['Java', 'Python', 'PHP', 'Ruby', 'Ruby', 'C#']
    console.log(data);
}

{ // 行列、テンソルはこのように書く
    let data: number[][] = [
        [10, 20],
        [30, 40],
        [50, 60],
    ];
    console.log(data[1][1]); // 40
}

{ // Array コンストラクター(わかりにくいので Array コンストラクターは避ける)
    let data: number[] = new Array(5, 10, 15);
    console.log(data);
}

{ // 要素5、10、15 の配列 (わかりにくいので Array コンストラクターは避ける)
    let data: number[] = new Array(5, 10, 15);
    console.log(data);
    // let data: number[] = []; 空の配列は空のブランケットで表現
}
