import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { Dashboard } from "./components/Dashboard";
import { Display } from "./components/Display";

it("renders without crashing", () => {
  render(<App />);
});

it("renders without crashing", () => {
  render(<Dashboard />);
});

it("renders without crashing", () => {
  render(<Display />);
});

const sel = id => `[data-testid="${id}"]`;
const rootNode = id => document.querySelector(sel(`${id}`));
const strikesButton = rootNode("strikes");
const ballsButton = rootNode("balls");
const foulsButton = rootNode("ffsd");
const hitButton = rootNode("hit");
const arr = [strikesButton, ballsButton, foulsButton, hitButton];

// arr.forEach(x => {
//   it(`renders button ${xs}`, () => {
//     render(x);
//   });
// });

it(`${strikesButton} renders without error`, () => {
  render(strikesButton);
});
