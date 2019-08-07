{ // const は再代入できない
    const DATA: number = 100;
    DATA = 108; // Cannot assign to 'DATA' because it is a constant.
    console.log(DATA)
}

{ // const は「再代入できない」であって、「変更できない」ではない
    const DATA = [1, 2, 3];
    DATA[0] = 10; // できる
}
