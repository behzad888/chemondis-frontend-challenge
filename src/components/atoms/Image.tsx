import clsx from "clsx";
import { forwardRef } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <img ref={ref} className={clsx("c-image", className)} {...restProps} />
  );
});

Image.displayName = "Image";

export { Image };
