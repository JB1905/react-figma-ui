import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const Label: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={classNames('label', className)}>
    {children}
  </div>
);
