import React from "react";
import CardFront from "./CardFront";
import { render } from "@testing-library/react";
import FakeData from '../../data/projects.js';

const FakeObject = FakeData[0];

describe("CardFront tests", () => {
      it("should render", () => {
        expect(render(<CardFront project={FakeObject}/>)).toBeTruthy();
      });
    })
