import { connect } from "react-redux";

import BirdImage from "../assets/bird.png";

// @ts-ignore
const Bird = ({ y, r }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: 120,
        width: 38,
        height: 26,
        background: `url(${BirdImage})`,
        transform: `rotate(${r}deg)`,
        transition: "transform 100ms, top 300ms",
      }}
    ></div>
  );
};

// @ts-ignore
const mapStateToProps = ({ bird }) => ({
  y: bird.y,
  r: bird.r,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
