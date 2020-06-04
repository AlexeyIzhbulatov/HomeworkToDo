import React from 'react';
import './App.css';

function TodoList(props) {

    const onDeleteTask = (id) => {
        console.log('List delete' + id);
        props.onDeleteTask(id)
    }


    return (
        <div className="todo">
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                    {el.done && '✅'}
                    <button onClick={() => props.onTaskDoneToggle(el.id)}>
                        {el.done ? 'Да': 'Нет'}
                    </button>
                    <button onClick={() => onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;