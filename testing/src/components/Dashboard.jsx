import { useButton } from "../hooks/useButton";
import { Display } from "./Display";
import React, { useState } from "react";

export const Dashboard = () => {
  const [strikes, setStrikes, clickStrikes] = useButton(0);
  const [balls, setBalls, clickBalls] = useButton(0);
  const [fouls, setFouls] = useState(0);

  const foulClick = () => {
    strikes === 0 || strikes == 1
      ? setStrikes(strikes + 1) && setStrikes(fouls + 1)
      : setFouls(fouls + 1);
  };

  return (
    <>
      <button className="strikes" onClick={clickStrikes}>
        {strikes >= 3 ? setStrikes(0) : null}
        Strikes
      </button>
      <button className="balls" onClick={clickBalls}>
        {balls >= 4 ? setBalls(0) : null}
        Balls
      </button>
      <button className="fouls" onClick={foulClick}>
        Foul
      </button>
      <button
        className="hit"
        onClick={() => {
          setBalls(0);
          setStrikes(0);
        }}
      >
        Hit
      </button>
      <Display strikes={strikes} balls={balls} fouls={fouls} />
    </>
  );
};
