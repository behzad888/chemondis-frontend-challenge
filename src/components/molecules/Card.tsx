import clsx from 'clsx';
import {Image} from 'components/atoms';
import {forwardRef} from 'react';

import 'assets/elements/card.scss';
import {__DEV__} from 'utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  headerText?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {imageUrl, headerText, className, children, ...restProps} = props;

  return (
    <div className='c-card' ref={ref} {...restProps}>
      {(imageUrl || headerText) && (
        <Image className='c-card__image' src={imageUrl} alt={headerText!} />
      )}
      {headerText && <div className='c-card__header'>{headerText}</div>}
      <div className={clsx('c-card__body', className)}>{children}</div>
    </div>
  );
});

if (__DEV__) {
  Card.displayName = 'Card';
}

Card.defaultProps = {
  headerText: '',
};

export {Card};
