const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// スプレッド構文を使うと一つずつ展開されて入れられる
const result = Math.max(...nums);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// newArr1にpushするとarr1の中身も変わる
// let newArr1 = arr1;
// newArr1.push(4);
// console.log(newArr1, arr1);

// newArrはスプレッド演算子でarr1から新しい配列として展開されている
let newArr = [...arr1, 10, ...arr2];
newArr.push(4);
console.log(newArr, arr1);


const obj = {
  name: "Tom",
  age: 22,
};
const newObj = {
  ...obj
};

// 展開もとには反映されない
newObj.name = 'John';

console.log(newObj, obj);

// 残有引数として渡ってきた値を配列として扱う
// 引数の数が決まっていない時に使える
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 別の変数にしたい場合は分けられる
const restB = (n, ...argB) => console.log(argB, n);
restB(1, 3, 4)