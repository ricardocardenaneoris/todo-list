import React, { useState } from 'react';
import { pageClassNames } from './todoStyles';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';

type Task = {
  task: string;
  completed: boolean;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const classes = pageClassNames();

  const handleOnAdd = () => {
    const newTodos = [...todos, { task: task.trim(), completed: false }];
    setTodos(newTodos);
    setTask("");
  }

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={classes.root}>
        <h1 className={classes.title}>Todo</h1> 
        <div className={classes.form}>
          <Input
            label="Task"
            value={task}
            onChange={(_, value) => setTask(value)}
          />
          <Button
            variant="primary"
            onClick={(_) => handleOnAdd()} 
          >
            Add
          </Button>
        </div>
        <ul className={classes.list}>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={classes.taskItem(todo.completed)}
          >
            <span
              className={classes.taskText(todo.completed)}
              onClick={() => toggleComplete(index)}
            >
              {todo.task}
            </span>
            <button
              onClick={() => removeTask(index)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoPage.displayName = 'TodoPage';

export { TodoPage}