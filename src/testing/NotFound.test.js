import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import NotFound from "../pages/NotFound";

describe("404 Not Found Page", () => {
  test("Button clickable", () => {
    const history = createMemoryHistory();

    render(
      <>
        <Router history={history}>
          <NotFound />
        </Router>
      </>
    );
    fireEvent.click(screen.getByText(/go back home/i));
  });

  test("Button not disable", () => {
    const history = createMemoryHistory();

    render(
      <>
        <Router history={history}>
          <NotFound />
        </Router>
      </>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("Image should be shown", () => {
    const history = createMemoryHistory();

    render(
      <>
        <Router history={history}>
          <NotFound />
        </Router>
      </>
    );
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "not_found.svg");
    expect(icon).toHaveAttribute(
      "alt",
      "Icon that tell you, this website not found and you can't access it."
    );
  });
});
