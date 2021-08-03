import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackHomeClick = () => {
        history.push('/')
    }

    console.log(params)

    return (
        <>
            <div className="back-buttom-container">
                <Button onClick={handleBackHomeClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.TaskTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quo, tempore quasi quaerat aliquid sunt!</p>
            </div>
        </>
    );
}

export default TaskDetails;