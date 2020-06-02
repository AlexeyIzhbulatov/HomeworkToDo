import React from 'react';
import './App.css';

function TodoList(props) {


    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>
                    {el.name}
                    {el.done && '✅'}
                    <button onClick={() => props.onTaskDoneToggle(el.id)}>{el.done ? 'undone' : 'done'}</button>
                <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
                </li>)

            }
        </div>
    );
}

export default TodoList;