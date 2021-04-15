import { HTMLProps } from 'react';
interface Props extends Readonly<HTMLProps<HTMLTextAreaElement>> {
}
export declare const Textarea: ({ className, ...props }: Props) => JSX.Element;
export {};
