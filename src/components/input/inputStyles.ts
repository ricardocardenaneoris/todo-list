import classNames from 'classnames';

export const inputClassNames = () => ({
    input: classNames('border border-gray-300 rounded-md p-2'),
    label: classNames('block text-sm font-medium text-gray-700'),
    error: classNames('block text-sm font-medium text-red-700'),
})