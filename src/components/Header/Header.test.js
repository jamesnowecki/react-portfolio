import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
describe("Header tests", () => {
    it("should render", () => {
      expect(render(<Header />)).toBeTruthy();
    });
  })
