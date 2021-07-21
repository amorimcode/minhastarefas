import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
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
    <div>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </div>
  )
}

export default App;
