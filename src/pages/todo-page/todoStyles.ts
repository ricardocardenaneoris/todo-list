import classNames from 'classnames';

const pageClassNames = () => ({
    root: classNames('max-w-3xl mx-auto mt-4'),
    title: classNames('text-2xl font-bold text-center'),
    form: classNames('flex items-end justify-center gap-4 my-4'),
    list: classNames('mt-4 space-y-2'),
    taskItem: (completed: boolean) => classNames('flex justify-between items-center p-2 border rounded', {
        'bg-green-100': completed,
        'bg-gray-100': !completed,
    }),
    taskText: (completed: boolean) => classNames('flex-1 cursor-pointer', {
        'line-through text-gray-500': completed,
    }),
})
export { pageClassNames }