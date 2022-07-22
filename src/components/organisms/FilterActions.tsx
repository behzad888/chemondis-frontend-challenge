import { Select } from "components/atoms";
import { usePagination } from "hooks";
import { memo, useCallback } from "react";
import { PageOption } from "utils";

type AlbumFilterActionsProps = {
  onChangeFilter: (pageOption: PageOption) => void;
};
function FilterActionsComponent({ onChangeFilter }: AlbumFilterActionsProps) {
  const [pageOption, setPageOption] = usePagination();

  const onChangePageSize = useCallback(
    ({ currentTarget }: React.ChangeEvent<HTMLSelectElement>) => {
      let tempPageOption = {
        ...pageOption,
        size: parseInt(currentTarget.value),
      };
      setPageOption(tempPageOption);
      onChangeFilter(tempPageOption);
    },
    [setPageOption, onChangeFilter, pageOption]
  );

  return (
    <div className="c-filter__actions">
      <span>Page Size: </span>
      <Select value={pageOption.size} onChange={onChangePageSize}>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </Select>
    </div>
  );
}

const FilterActions = memo(FilterActionsComponent);

export { FilterActions };
