import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea: React.FC<Props> = ({ className = '', ...props }) => (
  <textarea {...props} className={classNames('textarea', className)} />
);
