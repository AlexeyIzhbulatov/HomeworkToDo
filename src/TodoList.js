import React, {useState} from 'react';
import './App.css';

function TodoList(props) {
    const [editTask, setEditTask] = useState({})
    const editMode = (el) => {
        setEditTask(el)
    }

    const onChangeTaskEdit = (e) => {
        setEditTask({...editTask, name: e.target.value})
    }

const onTaskSave = () =>{
        props.onTaskSave(editTask);
        setEditTask({})
}


    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>


                    {
                        editTask.id === el.id
                            ? <>
                                <input type="text" value={editTask.name}
                                       onChange={onChangeTaskEdit}/>
                                <button onClick={onTaskSave}>Save</button>
                            </>
                            : <span onClick={() => editMode(el)}>{el.name}</span>
                    }

                    {el.done ? '✅' : '❌'}
                    <button onClick={() => props.onTaskDoneToggle(el.id)}>
                        {el.done ? 'unDone' : 'Done'}
                    </button>
                    <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;