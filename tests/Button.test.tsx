import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "../app/components/Button/Button";
import styles from "../app/components/Button/Button.module.scss";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button variant="primary">Text</Button>);

    const button = screen.findByText("Text");

    expect(button).toBeInTheDocument;
  });

  it("does something when clicked", () => {
    const mockClick = jest.fn();

    render(
      <Button onClick={mockClick} variant="primary">
        Text
      </Button>
    );

    const button = screen.getByText("Text");

    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalled();
  });

  it("has the correct variant===primary class", () => {
    render(<Button variant="primary">Text</Button>);

    const button = screen.getByText("Text");

    expect(button).toHaveClass(styles.primary);
  });

  it("has the correct variant===secondary class", () => {
    render(<Button variant="secondary">Text</Button>);

    const button = screen.getByText("Text");

    expect(button).toHaveClass(styles.secondary);
  });
});
