import clsx from "clsx";

type SearhbarProps = {
  className?: string;
};
function Searchbar({ className }: SearhbarProps) {
  return <label className={clsx("c-searchbar", className)}>aslhkcf</label>;
}

export { Searchbar };
