import React, { HTMLProps } from 'react';

import { trimClassNames } from '../helpers/combineClassNames';

interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {}

export const Textarea: React.FC<Props> = ({ className = '', ...props }) => (
  <textarea {...props} className={trimClassNames(`textarea ${className}`)} />
);
