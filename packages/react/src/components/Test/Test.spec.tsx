import { render, screen } from "@testing-library/react";
import { Test } from ".";

describe("<Test />", () => {
  it("should render correctly", () => {
    render(<Test />);
    expect(screen.getByText("Olá mundo")).toBeInTheDocument();
  });
});
