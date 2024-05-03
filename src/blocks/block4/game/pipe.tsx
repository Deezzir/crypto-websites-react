import { connect } from "react-redux";

import TopPipeImage from "../assets/pipe-top.png";
import BottomPipeImage from "../assets/pipe-bottom.png";

// @ts-ignore
const Pipe = ({ x, pipes }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* @ts-ignore */}
      {pipes.map(({ topHeight }, i) => (
        <div
          key={`pipe-${i}`}
          style={{
            position: "relative",
          }}
        >
          <div
            className="img-vert rounded-t-lg"
            style={{
              position: "absolute",
              top: 0,
              left: x + i * 200,
              width: 52,
              height: topHeight,
              background: `url(${TopPipeImage})`,
              backgroundPosition: "bottom",
              transition: "left 300ms",
            }}
          ></div>
          <div
            className="rounded-t-lg"
            style={{
              position: "absolute",
              top: topHeight + 100,
              left: x + i * 200,
              width: 52,
              height: 512 - topHeight - 100,
              background: `url(${BottomPipeImage})`,
              transition: "left 300ms",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

// @ts-ignore
const mapStateToProps = ({ pipe }) => ({ x: pipe.x, pipes: pipe.pipes });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
