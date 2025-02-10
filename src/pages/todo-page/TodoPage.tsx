import React from 'react';
import { pageClassNames } from './todoStyles';

const TodoPage = () => {
  const classes = pageClassNames();
  return (
    <div className={classes.root}>
      <h1>Todo</h1>
    </div>
  );
}

TodoPage.displayName = 'TodoPage';

export { TodoPage}