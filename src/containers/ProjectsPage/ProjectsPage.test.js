import React from "react";
import ProjectsPage from "./ProjectsPage";

describe("ProjectsPage tests", () => {
    it("should render", () => {
      expect(render(<ProjectsPage />)).toBeTruthy();
    });

});
