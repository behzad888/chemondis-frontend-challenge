import { Searchbar } from "components/organisms";

import "assets/objects/header.scss";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="c-header">
      <span className="c-header--item c-header--title">{title}</span>
      <Searchbar className="c-header--item"></Searchbar>
    </header>
  );
};
