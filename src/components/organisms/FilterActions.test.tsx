import { act, fireEvent, render } from "@testing-library/react";
import { FilterActions } from "./FilterActions";

describe("<FilterActions />", () => {
  describe("initial state", () => {
    it("should have default components", () => {
      const handlerFilterChange = jest.fn();
      const { getByRole, getAllByRole } = render(
        <FilterActions onChangeFilter={handlerFilterChange} />
      );
      const select = getByRole("listbox");
      const button = getAllByRole("button");

      expect(select).toHaveValue("20");
      expect(button).toHaveLength(2);
    });

    it("prev button should be disabled", () => {
      const handlerFilterChange = jest.fn();
      const { getAllByRole } = render(
        <FilterActions onChangeFilter={handlerFilterChange} />
      );
      const prevButton = getAllByRole("button")[0];

      expect(prevButton).toBeDisabled();
    });

    it("prev button should not be disabled", async () => {
      const handlerFilterChange = jest.fn(() => {
        return Promise.resolve({ hasNextPage: true });
      });
      const { getAllByRole } = render(
        <FilterActions onChangeFilter={handlerFilterChange} />
      );

      const nextButton = getAllByRole("button")[1];
      const prevButton = getAllByRole("button")[0];
      await act(async () => {
        fireEvent.click(nextButton);
      });
      expect(prevButton).not.toBeDisabled();
    });
  });
});
