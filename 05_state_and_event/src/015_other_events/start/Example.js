import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // 入力を検知
          onChange={(e) => console.log("onChange検知")}
          // フォーカスが外れた時
          onBlur={() => console.log("onBlur検知")}
          // フォーカスが当たった時
          onFocus={() => console.log("onFocus検知")}
        />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        // カーソルがホバーした時
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        // ホバーが外れた時
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
