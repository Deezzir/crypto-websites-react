import { useEffect } from "react";
import { connect } from "react-redux";

import Bird from "./bird";
import Pipe from "./pipe";
import Foreground from "./foreground";

import BgImage from "../assets/bg.png";

let gameLoop: NodeJS.Timeout;
let pipeGenerator: NodeJS.Timeout;

const Game = ({
  status,
  start,
  fly,
}: {
  status: string;
  start: () => void;
  fly: () => void;
}) => {
  if (status === "game-over") {
    clearInterval(gameLoop);
    clearInterval(pipeGenerator);
  }

  useEffect(() => {
    const handleKeyPress = (e: { keyCode: number }) => {
      if (e.keyCode === 32) {
        fly();
      }

      if (status !== "playing") {
        start();
      }
    };

    document.addEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: 512,
        height: 512,
        background: `url(${BgImage})`,
        overflow: "hidden",
      }}
    >
      <Bird />
      <Pipe />
      <Foreground />
    </div>
  );
};

const fly = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: "FLY" });
  };
};

const start = () => {
  return (
    dispatch: (arg0: { type: string }) => void,
    getState: () => { (): any; new (): any; game: { status: any } }
  ) => {
    const { status } = getState().game;

    if (status !== "playing") {
      gameLoop = setInterval(() => {
        dispatch({ type: "FALL" });
        dispatch({ type: "RUNNING" });

        check(dispatch, getState);
      }, 200);

      pipeGenerator = setInterval(() => {
        dispatch({ type: "GENERATE" });
      }, 3000);

      dispatch({ type: "START" });
    }
  };
};

// @ts-ignore
const check = (dispatch, getState: any) => {
  const state = getState();
  const birdY = state.bird.y;
  const pipes = state.pipe.pipes;
  const x = state.pipe.x;
  const challenge = pipes
    // @ts-ignore
    .map(({ topHeight }, i) => {
      return {
        x1: x + i * 200,
        y1: topHeight,
        x2: x + i * 200,
        y2: topHeight + 100,
      };
    })
    // @ts-ignore
    .filter(({ x1 }) => {
      if (x1 > 0 && x1 < 288) {
        return true;
      }
      return false;
    });

  if (birdY > 512 - 108) {
    dispatch({ type: "GAME_OVER" });
  }

  if (challenge.length) {
    const { x1, y1, x2, y2 } = challenge[0];

    if (
      (x1 < 120 && 120 < x1 + 52 && birdY < y1) ||
      (x2 < 120 && 120 < x2 + 52 && birdY > y2)
    ) {
      dispatch({ type: "GAME_OVER" });
    }
  }
};

// @ts-ignore
const mapStateToProps = ({ game }) => ({ status: game.status });
const mapDispatchToProps = { start, fly };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
