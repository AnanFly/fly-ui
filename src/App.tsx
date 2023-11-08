import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        按钮撒旦撒哦i第四
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href="https://www.baidu.com"
      >
        链接
      </Button>
      <Button btnType={ButtonType.Primary}>按钮1</Button>
      <Button disabled>禁用按钮</Button>
    </div>
  );
}

export default App;
