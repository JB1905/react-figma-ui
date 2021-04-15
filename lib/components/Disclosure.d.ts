import { HTMLProps, ReactElement, DetailedHTMLProps, LiHTMLAttributes } from 'react';
interface DisclosureProps<T> extends Readonly<HTMLProps<HTMLUListElement>> {
    readonly tips: T[];
    render(...tipData: [T, number, T[]]): ReactElement;
}
interface DisclosureTipProps extends Readonly<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> {
    readonly heading: string;
    readonly content: string;
    readonly section?: boolean;
    readonly expanded?: boolean;
    readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}
export declare function Disclosure<T extends object>({ tips, render, className, ...props }: DisclosureProps<T>): JSX.Element;
export declare const DisclosureTip: ({ section, expanded, heading, content, className, labelProps, contentProps, ...props }: DisclosureTipProps) => JSX.Element;
export {};
