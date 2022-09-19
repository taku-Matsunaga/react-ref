const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if (val > 50) {
    newArry.push(arry[i] * 2)
  }
}

console.log(newArry);

// mapの引数にはindexと配列も渡せる
const newArry2 = arry.map((val, i, arry) => {
  console.log(val);
  return val * 2;
});

// trueであれば値を返す、falseの場合は返さない
const newArry3 = newArry2.filter(val => val > 50);

console.log(newArry2);
console.log(newArry3);

// mapとfilterをチェーンで繋げて簡潔に書ける
const newArry4 = arry.map(val => val * 2).filter(val => val > 50);
console.log(newArry4);