const sayHello = (name: string) => {
    return `Hello, ${name}`;
};

// sayhelloというアロー関数を定義する
// nameという引数を1つ受け取る
//  return で "Hello, " + name + "!" を 返す

console.log(sayHello("Alice"));

// sayhello("Alice")を実行する
// nameにAliceが渡される
// returnでHello, Aliceを返す
// console.log に渡され、 コンソールに "Hello, Alice!" を表示

// 👉 sayHello を実行すると、name に "Alice" が入る
// 👉 関数が "Hello, Alice!" を返す（return）
// 👉 console.log で 画面に表示される

const double = (num: number) => {
    return num * 2;
};

console.log(double(4));
