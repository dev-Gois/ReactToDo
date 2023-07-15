import React, { useState } from "react";
import Loading from './components/Loading';
import './App.css';
import { Paper, List, Container } from '@mui/material'
import Form from "./components/Form"
import TaskItem from "./components/TaskItem";
function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [tasks, setTasks] = useState([]);
  var contentClass = "content"

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    var filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const editTask = (id, editedText) => {
    var tasksArray = tasks;

    for (var i in tasksArray) {
      if (tasksArray[i].id == id) {
        tasksArray[i].text = editedText;
      }
    }
    setTasks(tasksArray);
  }

  if(!isLoading) contentClass = "content in"
  setTimeout(() => {setIsLoading(false)}, 5000);

  return (
    <div className="App">
      <Loading isLoading={isLoading}/>
      <Container maxWidth="xs" className={contentClass} style={{ marginTop: "1em" }}>
        <Paper>
        <Form addTask={addTask} />
          <List sx={{ marginTop: "1em" }}>
          {tasks.map((task) => (
            <div key={task.id} style={{ marginTop: "1em" }}>
              <TaskItem editTask={editTask} task={task} deleteTask={deleteTask} />
            </div>
          ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
