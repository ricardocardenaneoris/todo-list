import classNames from 'classnames';
import { ButtonProps } from './Button';

export const buttonClassNames = (variant: ButtonProps["variant"], inverse: ButtonProps["inverse"]) => (classNames('h-auto px-4 py-2 rounded-md h-fit', {
    'bg-blue-500 text-white': variant === 'primary' && !inverse,
    'bg-white text-blue-500': variant === 'primary' && inverse,
    'bg-gray-500 text-white': variant === 'secondary' && !inverse,
    'bg-white text-gray-500': variant === 'secondary' && inverse,
}))