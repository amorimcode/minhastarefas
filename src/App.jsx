import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10%22"
        )

        setTasks(data)
    };

    fetchTasks();
  }, []);


  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id = !taskId)

    setTasks(newTasks)
  }


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {
        ...task, completed: !task.completed
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/' exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks}
              handleTaskClick={handleTaskClick}
              handleTaskDeletion={handleTaskDeletion} />
          </>
        )} />
        <Route path="/:TaskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
}

export default App;
