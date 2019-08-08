// null非許容型

// 本来はすべての型に対して null undefined が代入可能

// Compiled with --strictNullChecks
// tsc --strictNullChecks
// これを使うことにより、null / undefined 代入を禁止する

{
    let data1: string = undefined; // Type 'undefined' is not assignable to type 'string'.
    let data2: string = null; // Type 'null' is not assignable to type 'string'.
    console.log(data1, data2);
}

{ // こすることで null / undefined を許容する
    let data1: string | undefined = undefined;
    let data2: string | null = null;
    console.log(data1, data2);
}
