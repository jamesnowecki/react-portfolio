import React from "react";
import Card from "./Card";

describe("Card tests", () => {
  it("should render", () => {
    expect(render(<Card />)).toBeTruthy();
  });
})
