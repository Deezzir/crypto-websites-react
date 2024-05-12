import { useState } from "react";
import { Block1 } from "./blocks/block1/block1";
import { Block2 } from "./blocks/block2/block2";

import { Banner } from "./blocks/banner";
import { FooterSection } from "../../common/footer";

export const Landing = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner ? (
        <Banner close={setShowBanner} />
      ) : (
        <>
          <Block1 />
          <Block2 />
          {/* <Block3 />
          <Block4 />
          <Block5 />
          <Block6 />
          <Block7 /> */}
          <FooterSection />
        </>
      )}
    </>
  );
};
