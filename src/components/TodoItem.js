import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CompletedIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';




export default function TodoItem(props) {

  return (
    <div>
      <Card style={{
        minWidth: 300,
        paddingLeft:16,
        margin: 16, textDecoration: props.item.completed ? "line-through" : "none"
      }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item><Typography >{props.item.todo}</Typography></Grid>
          <Grid item>

            <IconButton onClick={() => { props.onComplete(props.item.id) }}
              color="primary" aria-label="upload picture" component="span">
              <CompletedIcon />
            </IconButton>
            <IconButton
              onClick={() => { props.onDelete(props.item.id) }}
              color="primary" aria-label="upload picture" component="span">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
