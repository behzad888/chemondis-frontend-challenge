import "assets/elements/_card.scss";
import clsx from "clsx";

type CardProps = {
  className?: string;
  imageUrl?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
};
function Card({ className, header, children, imageUrl }: CardProps) {
  return (
    <div className="c-card">
      {imageUrl && <img className="c-card__image" src={imageUrl} />}
      {header && <div className="c-card__header">{header}</div>}
      <div className={clsx("c-card__body", className)}>{children}</div>
    </div>
  );
}

export { Card };
