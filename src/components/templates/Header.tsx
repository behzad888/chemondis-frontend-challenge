import "assets/objects/header.scss";
import { Searhbar } from "components/molecules";
type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="c-header">
      <span className="c-header--item c-header--title">{title}</span>
      <Searhbar className="c-header--item"></Searhbar>
    </header>
  );
};
