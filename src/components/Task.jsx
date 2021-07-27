import React from 'react';
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button onClick={handleTaskDeletion}className="remove-task-button">X</button>
            </div>
        </div>
    )
}
// return <div className="task-container">{task.title}</div>

export default Task;