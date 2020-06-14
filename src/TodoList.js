import React, {useState} from 'react';
import './App.css';


function TodoList(props) {



    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;