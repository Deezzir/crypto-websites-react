import FgImage from "../assets/fg.png";

const Foreground = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: 512,
        height: 108,
        background: `url(${FgImage})`,
      }}
    ></div>
  );
};

export default Foreground;
