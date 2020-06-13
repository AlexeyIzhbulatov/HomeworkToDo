import React, {useState} from 'react';
import './App.css';


function TodoCreateForm(props) {
const [task, setTask] = useState('')

const addTask = () => {
    props.onCreateTask(task)
    setTask('')
}

    return (
        <div className="createForm">
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addTask}>add Task</button>
        </div>
    );
}

export default TodoCreateForm;
