import React from 'react';
import { render } from '@testing-library/react';
import App from './App.jsx';

describe("App tests", () => {
  it("should render", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
