import clsx from "clsx";
import { forwardRef } from "react";
import { __DEV__ } from "utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <img ref={ref} className={clsx("c-image", className)} {...restProps} />
  );
});

if (__DEV__) {
  Image.displayName = "Image";
}

export { Image };

