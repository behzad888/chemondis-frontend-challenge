import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  describe("initial state", () => {
    test("should have default class", () => {
      const { container } = render(<Button />);
      const root = container.firstChild;

      expect(root).toHaveClass("c-btn");
    });

    test("should button type", () => {
      const { container } = render(<Button />);
      const root = container.firstChild;

      expect(root).toHaveAttribute("type", "button");
    });
    test("should have button role", () => {
      const { container } = render(<Button />);
      const root = container.firstChild;

      expect(root).toHaveAttribute("role", "button");
    });
  });
  describe("props", () => {
    test("prop: type", () => {
      const { container } = render(<Button type="submit" />);
      const root = container.firstChild;
      expect(root).toHaveAttribute("type", "submit");
    });
    test("prop: children: text", () => {
      const { container } = render(<Button>This is a button</Button>);
      const root = container.firstChild;
      expect(root).toHaveTextContent("This is a button");
    });
    test("prop: children: React Node", () => {
      const { container } = render(
        <Button>
          <a />
        </Button>
      );
      const root = container.firstChild?.firstChild;
      expect(root).toContainHTML("<a />");
    });
    test("prop: multiple attributes", () => {
      const { container } = render(<Button id="1" disabled />);
      const root = container.firstChild;
      expect(root).toHaveAttribute("id");
      expect(root).toHaveAttribute("disabled");
    });
    test("prop: disabled", () => {
      const { container } = render(<Button disabled />);
      const root = container.firstChild;
      expect(root).toBeDisabled();
    });
    test("prop: ref", () => {
      const buttonref: { current: HTMLButtonElement | null } = {
        current: null,
      };
      render(<Button ref={buttonref} />);
      expect(buttonref.current).toBeDefined();
    });
  });
  describe("render", () => {
    test("should render without crashing", () => {
      render(
        <Button>
          <Button>
            <Button>
              <Button></Button>
            </Button>
          </Button>
        </Button>
      );
      expect(screen).toBeDefined();
    });
  });
  describe("events", () => {
    test("on click", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      fireEvent.click(button);
      expect(handleClick).toBeCalledTimes(2);
    });
    test("should not fire click event on disabled element", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(handleClick).toBeCalledTimes(0);
    });
  });
});
