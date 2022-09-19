// webpackの場合は拡張子を省略可能（今回はHTMLから読み込むので拡張子をつける）
// default exportのものはここで名前を変えられる
import functionB, {
  hello,
  User
} from './module.js';

hello();
const user = new User('Tom');
user.hello();

functionB();