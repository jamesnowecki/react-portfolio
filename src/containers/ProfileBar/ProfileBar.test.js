import React from "react";
import ProfileBar from "./ProfileBar";

describe("ProfileBar tests", () => {
    it("should render", () => {
      expect(render(<ProfileBar />)).toBeTruthy();
    });

});
