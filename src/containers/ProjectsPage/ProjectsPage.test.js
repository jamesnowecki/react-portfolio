import React from "react";
import ProjectsPage from "./ProjectsPage";
import { render } from "@testing-library/react";

describe("ProjectsPage tests", () => {
    it("should render", () => {
      expect(render(<ProjectsPage />)).toBeTruthy();
    });

});
