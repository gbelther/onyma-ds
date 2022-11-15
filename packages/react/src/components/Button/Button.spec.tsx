import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should render correctly", () => {
    const children = "Button Test";
    render(<Button children={children} />);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("should render correctly", () => {
    const children = "Button Test";
    const onClickMock = jest.fn();
    render(<Button children={children} onClick={onClickMock} />);
    const component = screen.getByText(children);
    fireEvent.click(component);
    expect(onClickMock).toHaveBeenCalled();
  });
});
