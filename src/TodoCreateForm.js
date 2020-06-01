import React, {useState} from 'react';
import './App.css';


function TodoCreateForm(props) {

    const [task, setTask] = useState('');

    const addTask = () => {
        console.log(task)
        props.onCreateTask(task)
        setTask('');
    }

    return (
        <div className="createForm">
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addTask}>Add task</button>
        </div>
    );
}

export default TodoCreateForm;
