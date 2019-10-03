import React from "react";

export const Display = ({ strikes, balls, fouls }) => {
  return (
    <>
      <p>strikes: {strikes}</p>
      <p>balls: {balls}</p>
      <p>fouls: {fouls}</p>
    </>
  );
};
