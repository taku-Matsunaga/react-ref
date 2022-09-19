import "./Child.css";
import { List } from "./List";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

// 基本は一つのコンポーネントにつき一つものもをエクスポートするのでdefaultでok
// もし複数のものをエクスポートする場合には名前付きエクスポートにする
export default Child;