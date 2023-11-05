import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        按钮
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href="https://www.baidu.com"
      >
        按钮
      </Button>
      <Button btnType={ButtonType.Primary}>按钮</Button>
    </div>
  );
}

export default App;
