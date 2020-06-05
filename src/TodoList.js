import React, {useState} from 'react';
import './App.css';

function TodoList(props) {
    const [editTaskId, setEditTaskId] = useState({})

    const deleteTask = (id) => {
        console.log(id);
        props.onDeleteTask(id)
    }


   const onEditTaskChange = (e) => {
        setEditTaskId({...editTaskId, name: e.target.value})
   }



    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>

                    {
                        editTaskId === el.id
                            ? <input type="text" value={taskEdit.name} onChange={onEditTaskChange}/>
                            : <span onClick={() => onEditTaskChange(el)}>{el.name}</span>

                    }


                    {el.done && '✅' || '❌'}
                    <button onClick={() => deleteTask(el.id)}>Delete</button>
                    <button onClick={() => props.onDoneTask(el.id)}>{el.done ? 'unDone' : 'Done'}</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;