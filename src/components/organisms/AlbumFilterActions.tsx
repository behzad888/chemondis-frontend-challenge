type AlbumFilterActionsProps = {};
function AlbumFilterActions({}: AlbumFilterActionsProps) {
  return (
    <div className="c-filter__actions">
      Page size:{" "}
      <select>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}

export { AlbumFilterActions };
