import React from 'react';
import './App.css';

function TodoList(props) {


    return (
        <div className="todo">
            {
                props.todos.map(el => (
                    <li key={el.id}>
                        {el.done && '✅' || '⛔'}
                        {el.name}
                        <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
                        <button onClick={() => props.onTaskDone(el.id)}>Done</button>
                    </li>)
                )
            }
        </div>
    );
}

export default TodoList;
