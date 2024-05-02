import React from "react";

import "./App.css";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";
import { Block4 } from "./blocks/block4/block4";
import { Block3 } from "./blocks/block3/block3";
import { Block10 } from "./blocks/block10/block10";

function App() {
  return (
    <div className="App overflow-hidden">
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block10 />
    </div>
  );
}

export default App;
