import React from "react";

import "./App.css";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";
import { Block4 } from "./blocks/block4/block4";
import { Block3 } from "./blocks/block3/block3";
import { Block10 } from "./blocks/block10/block10";
import { Provider } from "react-redux";
import { FooterSection } from "./blocks/footer";
import { ToastContainer } from "react-toastify";

function App({ store }: any) {
  return (
    <div className="App overflow-hidden">
      <ToastContainer />
      <Block1 />
      <Block2 />
      <Block3 />
      <Provider store={store}>
        <Block4 />
      </Provider>
      <Block10 />
      <FooterSection />
    </div>
  );
}

export default App;
