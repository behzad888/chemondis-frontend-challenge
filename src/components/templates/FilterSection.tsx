import { Heading } from "components/atoms";
import { FilterActions } from "components/organisms";
import { FetchWithNextPageFlag, PageOption } from "utils";

import "assets/objects/filter-section.scss";

type FilterSectionProps = {
  changeFilter: (pageOption: PageOption) => FetchWithNextPageFlag;
  title: string;
  subText?: string;
};

export const FilterSection = ({
  title,
  subText,
  changeFilter,
}: FilterSectionProps) => {
  return (
    <section className="c-filter">
      <div className="c-filter__title">
        <Heading>{title}</Heading>
        <span>{subText}</span>
      </div>
      <FilterActions onChangeFilter={changeFilter}></FilterActions>
    </section>
  );
};
