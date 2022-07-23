import { fireEvent, render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("<Heading />", () => {
  describe("initial state", () => {
    test("should have default class", () => {
      const { container } = render(<Heading />);
      const root = container.firstChild;

      expect(root).toHaveClass("c-heading");
      expect(root).not.toHaveClass("undefined");
    });
    test("should be H1", () => {
      const { container } = render(<Heading />);
      const root = container.querySelector("h1");

      expect(root).toBeDefined();
    });
    describe("props", () => {
      test("prop: priority", () => {
        const { container } = render(<Heading priority={2} />);
        const root = container.querySelector("h2");

        expect(root).toBeDefined();
      });
      test("prop: children: text", () => {
        const { container } = render(<Heading>This is a h1</Heading>);
        const root = container.firstChild;
        expect(root).toHaveTextContent("This is a h1");
      });
      test("prop: children: React Node", () => {
        const { container } = render(
          <Heading>
            <a />
          </Heading>
        );
        const root = container.firstChild?.firstChild;
        expect(root).toContainHTML("<a />");
      });
      test("prop: multiple attributes", () => {
        const { container } = render(<Heading id="1" aria-label="h1" />);
        const root = container.firstChild;
        expect(root).toHaveAttribute("id");
        expect(root).toHaveAttribute("aria-label");
      });
    });
  });
});
