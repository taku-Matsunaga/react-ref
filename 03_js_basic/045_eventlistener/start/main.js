const h1Element = document.querySelector('h1');
// dirでDOMのオブジェクトを見られる
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';
console.log(h1Element.textContent);

const btnE1 = document.querySelector('button');
const helloFn = (e) => {
  console.log('hello')
  console.dir(e.target)
};

btnE1.addEventListener('click', helloFn);