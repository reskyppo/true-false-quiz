import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Homepage", () => {
  test("Render app title", () => {
    render(<Home />);
    const linkElement = screen.getByText("True Or False");
    expect(linkElement).toBeInTheDocument();
  });
  test('Icon must have src = "../assets/hero_icon.svg" and alt = "laptop illustration that represent about online quiz"', () => {
    render(<Home />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", "hero_icon.svg");
    expect(icon).toHaveAttribute(
      "alt",
      "laptop illustration that represent about online quiz"
    );
  });

  test("Button clickable", () => {
    render(<Home />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});
