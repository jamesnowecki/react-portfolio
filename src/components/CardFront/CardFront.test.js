import React from "react";
import CardFront from "./CardFront";
import { render } from "@testing-library/react";

describe("CardFront tests", () => {
      it("should render", () => {
        expect(render(<CardFront />)).toBeTruthy();
      });
    })
