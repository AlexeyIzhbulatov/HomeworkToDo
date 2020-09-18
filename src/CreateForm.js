import React, {useState} from 'react';
import './App.css';


function CreateForm(props) {

    const [tasks, setTasks] = useState('')

    const addTask = () => {
        props.onCreateTask(tasks)
        setTasks('')
    }

    return (
        <div>
            <input type="text" value={tasks} onChange={e => setTasks(e.target.value)}/>
            <button className="btn btn-primary" type="submit" onClick={addTask} disabled={tasks === ''}>Add task</button>
        </div>
    );

}

export default CreateForm;

