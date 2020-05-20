import React, { HTMLProps } from 'react';

enum Size {
  Small = 'small',
  Large = 'large',
  Xlarge = 'xlarge',
}

enum Weight {
  Medium = 'medium',
  Bold = 'bold',
}

interface Props extends HTMLProps<HTMLDivElement> {
  value: string;
  size: Size;
  weight: Weight;
  inverse: boolean;
}

export const Type: React.FC<Props> = ({
  value,
  size,
  weight,
  inverse,
  className = '',
  ...props
}) => (
  <div
    {...props}
    className={`type ${size ? `type--${size}` : ''} ${className} ${
      weight ? `type--weight` : ''
    } ${inverse ? 'type--inverse' : ''}`}
  >
    {value}
  </div>
);
