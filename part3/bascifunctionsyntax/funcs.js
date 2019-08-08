function triangle(base, height) {
    return base * height / 2; // 型推論で number型とみなされる
}
console.log(triangle(10, 5));
