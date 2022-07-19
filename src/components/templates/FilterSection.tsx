import "assets/objects/filter-section.scss";

import { Heading } from "components/atoms";
import { AlbumFilterActions } from "components/organisms";
type FilterSectionProps = {};

export const FilterSection = ({}: FilterSectionProps) => {
  return (
    <section className="c-filter">
      <div className="c-filter__title">
        <Heading>Albums</Heading>
        <span>View albums</span>
      </div>
        <AlbumFilterActions></AlbumFilterActions>      
    </section>
  );
};
