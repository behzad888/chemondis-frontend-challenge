import { Select } from "components/atoms";

type AlbumFilterActionsProps = {};
function AlbumFilterActions({}: AlbumFilterActionsProps) {
  return (
    <div className="c-filter__actions">
      <span>Page Size: </span>
      <Select>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </Select>
    </div>
  );
}

export { AlbumFilterActions };
