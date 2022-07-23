import { Button, Select } from "components/atoms";
import { usePagination } from "hooks";
import { memo, useCallback, useState } from "react";
import { FetchWithNextPageFlag, PageOption } from "utils";

type AlbumFilterActionsProps = {
  onChangeFilter: (pageOption: PageOption) => FetchWithNextPageFlag;
};
function FilterActionsComponent({ onChangeFilter }: AlbumFilterActionsProps) {
  const [pageOption, setPageOption] = usePagination();
  const [hasNextPage, setHasNextPage] = useState(true);

  const onChangePageSize = useCallback(
    async ({ currentTarget }: React.ChangeEvent<HTMLSelectElement>) => {
      let tempPageOption = {
        page: 0,
        size: parseInt(currentTarget.value),
      };
      const hasNextPage = await onChangeFilter(tempPageOption);
      if (hasNextPage) setHasNextPage(true);
      setPageOption(tempPageOption);
    },
    [setPageOption, onChangeFilter]
  );

  const onChangePage = useCallback(
    async (action: string) => {
      let tempPageOption = {
        ...pageOption,
      };

      switch (action) {
        case "next":
          tempPageOption.page += 1;
          break;
        case "prev":
          tempPageOption.page -= 1;
          setHasNextPage(true);
          break;
        default:
          break;
      }

      if ((await onChangeFilter(tempPageOption)).hasNextPage)
        setPageOption(tempPageOption);
      else setHasNextPage(false);
    },
    [setPageOption, onChangeFilter, pageOption]
  );

  return (
    <div className="c-filter__actions">
      <label htmlFor="page-size">Page Size: </label>
      <Select
        id="page-size"
        value={pageOption.size}
        onChange={onChangePageSize}
      >
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </Select>
      <Button
        disabled={pageOption.page <= 0}
        onClick={() => onChangePage("prev")}
      >
        Prev
      </Button>
      <span>Page: {pageOption.page + 1}</span>
      <Button disabled={!hasNextPage} onClick={() => onChangePage("next")}>
        Next
      </Button>
    </div>
  );
}

const FilterActions = memo(FilterActionsComponent);

export { FilterActions };
