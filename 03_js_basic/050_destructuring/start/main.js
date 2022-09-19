// 配列やオブジェクトから特定のものを取得することを分割代入という
// 何も入れずカンマで区切ることもできる
const [a, , c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);

// オブジェクトの場合はプロパティ名で管理しているので順番は関係ない
const {
  z,
  x
} = {
  x: "オブジェクト1",
  y: "オブジェクト2",
  z: "オブジェクト3"
};
console.log(x);
console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = {
  country: "Japan",
  state: "Tokyo",
  city: "Shinjuku"
};

// 配列の場合は渡した順番通りに入る
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// オブジェクトはプロパティ名を入れる
const fnObj = ({
  country,
  state,
  city
}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);