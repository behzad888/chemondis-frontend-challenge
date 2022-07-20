import clsx from "clsx";
import { forwardRef } from "react";
import { __DEV__ } from "utils";

import "assets/elements/skeleton.scss";

interface SkeletonProps extends React.ImgHTMLAttributes<HTMLDivElement> {
  startColor?: string;
  endColor?: string;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <div ref={ref} className={clsx("c-skeleton", className)} {...restProps}>
      <div>this content</div>
      <div>would be hidden</div>
    </div>
  );
});

if (__DEV__) {
  Skeleton.displayName = "Skeleton";
}

export { Skeleton };
