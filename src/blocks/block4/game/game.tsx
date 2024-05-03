import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import Bird from "./bird";
import Pipe from "./pipe";
import Foreground from "./foreground";

import BgImage from "../assets/bg.png";
import StartImage from "../assets/start.png";

let gameLoop: NodeJS.Timeout;
let pipeGenerator: NodeJS.Timeout;
// let SET_SCORE: any;

// @ts-ignore
const Game = ({ status, start, fly }) => {
  const gameRef = useRef<HTMLImageElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (status === "game-over") {
      clearInterval(gameLoop);
      clearInterval(pipeGenerator);
      setStarted(false);
    }
  }, [status]);

  useEffect(() => {
    const div = gameRef.current;
    if (!div) return;

    const handleKeyPress = (e: {
      keyCode: number;
      preventDefault: () => void;
    }) => {
      if (e.keyCode === 32 && status === "playing") {
        e.preventDefault();
        fly();
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (status === "playing") {
        e.preventDefault();
        fly();
      }
    };
    const handleClick = () => {
      if (status !== "playing") {
        setStarted(true);
        start();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    if (div) {
      div.addEventListener("mousedown", handleClick);
      div.addEventListener("touchstart", handleTouchStart);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      if (div) {
        div.removeEventListener("mousedown", handleClick);
        div.removeEventListener("touchstart", handleTouchStart);
      }
    };
  });

  return (
    <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center gap-4 lg:gap-[8rem]">
      <div className="flex h-full flex-col-reverse md:flex-col justify-center items-end lg:items-center">
        {/* <h2 className="text-2xl font-bold text-center">Score: {score}</h2> */}
        <img
          ref={gameRef}
          src={StartImage}
          alt="Flappy Bird"
          className="w-96 h-96 select-none object-contain cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
        />
      </div>
      <div
        className={
          "rounded-lg shadow-lg lg:scale-150 origin-center lg:translate-y-1/3 border-2 border-black " +
          (started ? "blur-none" : "blur-[2px]")
        }
        style={{
          position: "relative",
          width: 288,
          height: 512,
          background: `url(${BgImage})`,
          overflow: "hidden",
        }}
      >
        <Bird />
        <Pipe />
        <Foreground />
      </div>
    </div>
  );
};

const fly = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: "FLY" });
  };
};

const start = () => {
  // @ts-ignore
  return (dispatch, getState) => {
    const { status } = getState().game;

    if (status !== "playing") {
      gameLoop = setInterval(() => {
        dispatch({ type: "FALL" });
        dispatch({ type: "RUNNING" });

        check(dispatch, getState);
      }, 300);

      pipeGenerator = setInterval(() => {
        dispatch({ type: "GENERATE" });
      }, 3000);

      dispatch({ type: "START" });
    }
  };
};

// @ts-ignore
const check = (dispatch, getState) => {
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
