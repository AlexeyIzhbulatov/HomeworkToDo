import React, {useState} from 'react';
import './App.css';



function TodoCreateForm(props) {
const [task, setTask] = useState('')

    return (
        <div className="createForm">
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={() => onCreateTask(el.id)}>addTask</button>
        </div>
    );
}

export default TodoCreateForm;
