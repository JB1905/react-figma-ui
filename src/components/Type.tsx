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

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly size?: Size;
  readonly weight?: Weight;
  readonly inverse?: boolean;
}

export const Type: React.FC<Props> = ({
  children,
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
    {children}
  </div>
);
