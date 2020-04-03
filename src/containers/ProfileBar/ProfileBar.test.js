import React from "react";
import ProfileBar from "./ProfileBar";
import { render } from "@testing-library/react";

describe("ProfileBar tests", () => {
    it("should render", () => {
      expect(render(<ProfileBar />)).toBeTruthy();
    });

});
