function fn(number) {
  return number * 2;
}

// 無名関数
const fn2 = function (number) {
  return number * 2;
}

console.log(fn(2));

// アロー関数
const fnArrow = (number) => {
  return number * 2;
}

// アロー関数
// 引数が一つの場合は括弧を省略可能
// 処理が1行の場合は波括弧を外してreturnも外せる
const fnArrow2 = number => number * 2;

// オブジェクト形式で返す場合丸括弧でオブジェクトリテラルを返せる
const fnArrowObj = number => ({
  result: number * 2
});

console.log(fnArrow(2));
console.log(fnArrow2(2));
console.log(fnArrowObj(2));