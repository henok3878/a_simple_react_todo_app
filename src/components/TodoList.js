import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List   
      component="nav" aria-label="main mailbox folders">
        {props.todos.map((e)=><TodoItem onComplete={props.onComplete} onDelete={props.onDelete} key={e.id} item={e} />)}
      </List>
    </div>
  );
}
