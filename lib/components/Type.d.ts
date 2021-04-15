import { HTMLProps } from 'react';
import type { Size, Weight } from '../types';
interface Props extends Readonly<Omit<HTMLProps<HTMLDivElement>, 'size'>> {
    readonly size?: Size;
    readonly weight?: Weight;
    readonly inverse?: boolean;
}
export declare const Type: ({ children, size, weight, inverse, className, ...props }: Props) => JSX.Element;
export {};
