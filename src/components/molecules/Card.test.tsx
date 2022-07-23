import { fireEvent, render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("<Card />", () => {
  describe("initial state", () => {
    it("should have default class", () => {
      const { container } = render(<Card />);
      const root = container.firstChild;

      expect(root).toHaveClass("c-card");
      expect(root).not.toHaveClass("undefined");
    });
  });
  describe("props", () => {
    it("prop: imageUrl", () => {
      const { container } = render(<Card imageUrl="/fake.png"/>);
      const root = container.firstChild?.firstChild;

      expect(root).toHaveAttribute("role",'img');
      expect(root).toHaveAttribute("src",'/fake.png');
    });
    it("prop: headerText", () => {
      const { container } = render(<Card headerText="fake image does not appear"/>);
      const root = container.firstChild?.firstChild;

      expect(root).toHaveAttribute("alt",'fake image does not appear');
      const header = container.firstChild?.childNodes[1];

      expect(header).toHaveClass("c-card__header");
    });
  });
});
