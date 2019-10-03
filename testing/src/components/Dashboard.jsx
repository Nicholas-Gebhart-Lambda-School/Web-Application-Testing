import { useButton } from "../hooks/useButton";
import React from "react";

export const Dashboard = () => {
  const [strike, setStrikes, clickStrikes] = useButton(0);
  const [ball, setBalls, clickBalls] = useButton(0);
  const [foul, setFoul, clickFoul] = useButton(0);

  return (
    <>
      <button className="strikes" onClick={clickStrikes}>
        Strikes
      </button>
      <p>{strike}</p>
    </>
  );
};
