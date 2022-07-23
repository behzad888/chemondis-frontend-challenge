import {useState} from 'react';
import {defaultPageOption, PageOption} from 'utils';

export const usePagination = (): [
  PageOption,
  React.Dispatch<React.SetStateAction<PageOption>>,
] => {
  const [pageOption, setPageOption] = useState<PageOption>(defaultPageOption);

  return [pageOption, setPageOption];
};
