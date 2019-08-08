// 文字列リテラル
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

function getScene(s: Season) {
    console.log(s)
}

getScene('spring');

getScene('fall'); // Argument of type '"fall"' is not assignable to parameter of type 'Season'.

// 文字列リテラル型と共用型を組み合わせることで、文字列型の列挙体を表現
