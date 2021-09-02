import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import CompletedIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'




export default function TodoItem(props) {

  return (
    <div>
      <Card style={{ margin: 16,textDecoration: props.item.completed ? "line-through" : "none"}}>
      <ListItem >
          <ListItemText primary={props.item.todo} />
          <ListItemIcon>
          <IconButton  onClick ={()=>{props.onComplete(props.item.id)}}
          color="primary" aria-label="upload picture" component="span">
          <CompletedIcon />
        </IconButton>
          </ListItemIcon>
          <ListItemIcon>
          <IconButton
            onClick ={()=>{props.onDelete(props.item.id)}}
           color="primary" aria-label="upload picture" component="span">
          <DeleteIcon />
        </IconButton>
          </ListItemIcon>
        </ListItem>
      </Card>
    </div>
  );
}
