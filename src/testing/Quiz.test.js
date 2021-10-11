import { render, screen } from "@testing-library/react";
import Quiz from "../pages/Quiz";
import datas from "../utils/data.json";

describe("Quizpage", () => {
  test("Render app title", () => {
    render(<Quiz />);
    const linkElement = screen.getByText(`Question 1 / ${datas.length} `);
    expect(linkElement).toBeInTheDocument();
  });
});
