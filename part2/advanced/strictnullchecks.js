// null非許容型
// 本来はすべての型に対して null undefined が代入可能
// Compiled with --strictNullChecks
// tsc --strictNullChecks
// これを使うことにより、null / undefined 代入を禁止する
{
    var data1 = undefined; // Type 'undefined' is not assignable to type 'string'.
    var data2 = null; // Type 'null' is not assignable to type 'string'.
    console.log(data1, data2);
}
{ // こすることで null / undefined を許容する
    var data1 = undefined;
    var data2 = null;
    console.log(data1, data2);
}
