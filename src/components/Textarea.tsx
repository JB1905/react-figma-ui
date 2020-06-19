import React, { HTMLProps } from 'react';

import { combineClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea: React.FC<Props> = ({ className = '', ...props }) => (
  <textarea {...props} className={combineClassNames(`textarea ${className}`)} />
);
