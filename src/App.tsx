import React from "react";

import "./App.css";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";
import { Block4 } from "./blocks/block4/block4";

function App() {
  return (
    <div className="App">
      <Block1 />
      <Block2 />
      <Block4 />
    </div>
  );
}

export default App;
