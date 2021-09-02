import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TodoInputCard(props) {
  const classes = useStyles();

  function onInputChange(e){
    const value = e.target.value;
    props.onChange(value);
  }
  function onKeyPressHandler(e){
    if (e.key === 'Enter') {
        props.onAdd();
    }
    else{
      onInputChange(e);
    }
};
  return (
    <Card className={classes.root}>
      <CardContent> 
      <TextField onKeyPress={onKeyPressHandler} onChange={onInputChange} value={props.input} variant="outlined" label="Enter your todo" />
      </CardContent>
      <CardActions>
      <Fab onClick ={props.onAdd} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </CardActions>
    </Card>
  );
}
