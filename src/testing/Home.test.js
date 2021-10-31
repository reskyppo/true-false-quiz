import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home';

describe("Homepage", () => {
  test("Render app title", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const linkElement = screen.getByText(
      /Feeling bored and want to test your intelligence?/i
    );
    expect(linkElement).toBeInTheDocument();
  });
  test("Render app description", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const linkElement = screen.getByText(
      /By answering these question, we can help you to test your intelligence and increase your knowledge./i
    );
    expect(linkElement).toBeInTheDocument();
  });
  test('Icon must have src = "hero_icon.svg" and alt = "laptop illustration that represent about online quiz"', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "hero_icon.svg");
    expect(icon).toHaveAttribute(
      "alt",
      "laptop illustration that represent about online quiz"
    );
  });

  test("Button clickable", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});
