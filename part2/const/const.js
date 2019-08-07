{ // const は再代入できない
    var DATA = 100;
    DATA = 108; // Cannot assign to 'DATA' because it is a constant.
    console.log(DATA);
}
{ // const は「再代入できない」であって、「変更できない」ではない
    var DATA = [1, 2, 3];
    DATA[0] = 10; // できる
}
