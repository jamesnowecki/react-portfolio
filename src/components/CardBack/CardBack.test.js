import React from "react";
import CardBack from "./CardBack";
import { render } from "@testing-library/react";


  describe("CardBack tests", () => {
    it("should render", () => {
      expect(render(<CardBack />)).toBeTruthy();
    });

});
