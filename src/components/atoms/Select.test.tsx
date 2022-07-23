import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Select } from "./Select";

describe("<Select />", () => {
  describe("initial state", () => {
    it("should have default class", () => {
      const { container } = render(<Select />);
      const root = container.firstChild;

      expect(root).toHaveClass("c-select");
      expect(root).not.toHaveClass("undefined");
    });
    it("should be able to mount the component", () => {
      const { container } = render(
        <Select defaultValue={10}>
          <option value={5}>Five</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
        </Select>
      );
      const root = container.firstChild;
      expect(root).toHaveProperty("value", "10");
    });
  });
  describe("render", () => {
    it("should accept null child", () => {
      const { container } = render(
        <Select defaultValue={10}>
          {null}
          <option value={10}>Ten</option>
        </Select>
      );
      const root = container.firstChild;
      expect(root).toHaveProperty("value", "10");
    });
    [" ", "ArrowUp", "ArrowDown", "Enter"].forEach((key) => {
      it(`should open menu when pressed ${key} key on select`, () => {
        render(
          <Select defaultValue={10}>
            <option value={10}>Ten</option>
          </Select>
        );
        const trigger = screen.getByRole("combobox");
        act(() => {
          trigger.focus();
        });

        fireEvent.keyDown(trigger, { key });
        expect(screen.getByRole("option")).not.toEqual(null);

        fireEvent.keyUp(screen.getAllByRole("option")[0], { key });
        expect(screen.getByRole("option")).not.toEqual(null);
      });
    });
    it('should pass "name" as part of the event.target for onBlur', () => {
      const handleBlur = jest.fn();
      const { getByRole } = render(
        <Select onBlur={handleBlur} name="blur-testing" defaultValue={10}>
          <option value={10}>Ten</option>
        </Select>
      );
      const combobox = getByRole("combobox");
      act(() => {
        combobox.focus();
      });

      act(() => {
        combobox.blur();
      });

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
    it("should call onClose when the same option is selected", () => {
      const handleChange = jest.fn();
      render(
        <Select onChange={handleChange} value={10}>
          <option value={20}>Twenty</option>
          <option value={10}>Ten</option>
        </Select>
      );
      const option = screen.getByRole("option", { selected: true });
      option.click();

      expect(handleChange).toBeCalledTimes(0);
    });

    it("should focus select when its label is clicked", async () => {
      const { getByRole, getByTestId } = render(
        <React.Fragment>
          <label htmlFor="pet-select" data-testid="label">
            Choose a pet:
          </label>
          <Select id="pet-select">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </Select>
        </React.Fragment>
      );
      const titleSelect = getByTestId("label");
      userEvent.click(titleSelect);

      expect(getByRole("combobox")).toHaveFocus();
    });
  });
  describe("props", () => {
    it("prop: ref", () => {
      const selectRef: { current: HTMLSelectElement | null } = {
        current: null,
      };
      render(<Select ref={selectRef} />);
      expect(selectRef.current).toBeDefined();
    });
    it("prop: multiple attributes", () => {
      const { container } = render(<Select id="1" name="name" />);
      const root = container.firstChild;
      expect(root).toHaveAttribute("id");
      expect(root).toHaveAttribute("name");
    });
    it("prop: autoFocus", () => {
      const { getByRole } = render(<Select defaultValue="" autoFocus />);

      expect(getByRole("combobox")).toHaveFocus();
    });

    it("prop: onChange", () => {
      const onChangeHandler = jest.fn();
      const { getByRole } = render(
        <Select onChange={onChangeHandler} value="">
          <option value="">None</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      );
      userEvent.selectOptions(getByRole("combobox"), "dog");

      expect(onChangeHandler).toBeCalled();
    });
    describe("accessibility", () => {
      it('sets aria-disabled="true" when component is disabled', () => {
        const { getByRole } = render(<Select disabled></Select>);

        expect(getByRole("combobox")).toHaveAttribute("aria-disabled");
      });
      it('renders an element with combobox behavior', () => {
        const { getByRole } = render(<Select defaultValue="" />);
  
        expect(getByRole('combobox')).toBeVisible();
      });
    });
  });
});
