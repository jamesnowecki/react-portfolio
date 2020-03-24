import React from "react";
import Card from "./Card";
import { render } from "@testing-library/react";


describe("Card tests", () => {
  it("should render", () => {
    expect(render(<Card />)).toBeTruthy();
  });
})
