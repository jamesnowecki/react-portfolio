import React from "react";
import Profile from "./Profile";

describe("Profile tests", () => {
    it("should render", () => {
      expect(render(<Profile />)).toBeTruthy();
    });

});
