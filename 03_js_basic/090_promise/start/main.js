let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    // resolveが呼ばれるとthenのcallbackが実行される
    resolve(a);

    // rejectが呼ばれるとcatchのcallbackが実行される
    // reject(a);
  }, 2000);
}).then((b) => {
  console.log(b);
  // 次のthenのcallbackに結果を返す
  return b;
}).then((b) => {
  console.log(b);
}).catch(() => {
  console.log('catchが実行')
})