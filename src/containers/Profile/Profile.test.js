import React from "react";
import Profile from "./Profile";
import { render } from "@testing-library/react";

describe("Profile tests", () => {
    it("should render", () => {
      expect(render(<Profile />)).toBeTruthy();
    });

});
