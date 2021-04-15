import { HTMLProps } from 'react';
import type { IconName, ColorName } from '../types';
export interface Props extends HTMLProps<HTMLDivElement> {
    readonly iconName?: Readonly<IconName>;
    readonly spin?: boolean;
    readonly colorName?: Readonly<ColorName>;
}
export declare const Icon: ({ children, iconName, className, spin, colorName, ...props }: Props) => JSX.Element;
