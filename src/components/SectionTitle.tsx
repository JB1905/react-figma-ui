import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {}

export const SectionTitle: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={classNames('section-title', className)}>
    {children}
  </div>
);
