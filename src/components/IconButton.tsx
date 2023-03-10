import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Omit<Readonly<HTMLProps<HTMLDivElement>>, 'ref'> {
  readonly selected?: boolean;
  readonly iconProps: IconProps;
}

export const IconButton = forwardRef<HTMLDivElement, Props>(
  ({ selected, className = '', iconProps, ...props }, ref) => (
    <div
      {...props}
      className={clsx(
        'icon-button',
        className,
        selected && 'icon-button--selected'
      )}
      ref={ref}
    >
      <Icon {...iconProps} />
    </div>
  )
);
