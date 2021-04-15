import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import type { Tint } from '../types';
interface Props extends Readonly<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
    readonly tint?: Tint;
    readonly destructive?: boolean;
}
export declare const Button: ({ children, tint, destructive, className, ...props }: Props) => JSX.Element;
export {};
