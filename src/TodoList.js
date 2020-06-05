import React from 'react';
import './App.css';

function TodoList(props) {

    const deleteTask = (id) => {
        console.log(id);
        props.onDeleteTask(id)
    }

    const [editTaskId, setEditTaskId] = useState(null);

    const editMode = (id) => {
        setEditTaskId(id);
    };

    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>
                    {
                        editTaskId === el.id
                            ? <input type="text"/>
                            : <span onClick={() => editMode(el.id)}>{el.name}</span>

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