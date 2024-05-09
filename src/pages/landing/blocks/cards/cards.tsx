import React, { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

//@ts-ignore
import styles from "./styles.module.css";

const cards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: i,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: _i * 200, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

type CardState = {
  id: number;
  img: string;
  isFlipped: boolean;
};

const Cards = (props: any) => {
  const [randomCards, setRandomCards] = React.useState<any[]>([]);
  const [resetAnim, setResetAnim] = useState(false);

  //START
  const [propsApi, api] = useSprings(randomCards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      if (!down)
        setTimeout(() => {
          api.start((i) => to(i));
        }, 600);
    }
  );

  const getRandomCards = () => {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4).map((card, index) => {
      return {
        id: index,
        img: card,
        isFlipped: false,
      };
    });
  };

  const restartCards = () => {
    setResetAnim(true);
    setRandomCards(getRandomCards());
  };

  useEffect(() => {
    const res = getRandomCards();
    setRandomCards(res);
  }, []);

  const flidCard = (i: number) => {
    setRandomCards(
      randomCards.map((card) =>
        card.id === i ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      <div style={{ backgroundImage: '"./landing/cards/deck.png"' }}></div>
      {propsApi.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            onClick={() => {
              flidCard(i);
            }}
            className={"cursor-pointer"}
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${
                randomCards[i].isFlipped
                  ? randomCards[i].img
                  : "./landing/cards/back.png"
              })`,
            }}
          />
        </animated.div>
      ))}
    </>
  );
};

export default Cards;
