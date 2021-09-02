import './App.css';
import React, {useState, useEffect} from "react";
import Header from "./components/Header"
import TodoInputCard from './components/TodoInputCard';
import TodoList from './components/TodoList';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import uniqueId from "./utils/generate_id";
import { getTodos,saveTodos } from './services/local_storage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item : {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  let initialTodos = getTodos() ?? [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    saveTodos(todos);
  }, [todos])

  function onAddTodo(){
      const newTodo = {todo: input, completed: false, id: uniqueId()};
      setTodos((prevTodos)=>{
           return [...prevTodos,newTodo];
      });
      setInput("");
  }

  function onComplete(index){
    setTodos((prevTodos)=>{
      return prevTodos.map((e)=>{return e.id !== index ? e : {...e,completed: !e.completed}});
    });
  }
  function onDelete(index){
      setTodos((prevTodos)=>{
        return prevTodos.filter((e)=>e.id !== index);
      });
  }


  return (
    <div className= {"App"} >
        <Header title = {"Todo"}/>
        <Grid 
          style={{padding: 16}}
          spacing ={2}
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid xs={10} md={11} item>
          <TodoInputCard onAdd= {onAddTodo} input ={input} onChange ={(value)=>{setInput(value)}}className = {classes.item} />
          </Grid>
          <Divider />
          <Grid xs={10} md={11} item>
          <TodoList onComplete ={onComplete} onDelete = {onDelete} todos = {todos} className = {classes.item}/>
          </Grid>
         
         
        </Grid>
    </div>
  );
}

export default App;
