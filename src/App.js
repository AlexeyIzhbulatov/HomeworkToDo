import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList";

const initialTodos = [
    {id: uuidv4(), name: 'Task1', done: false},
    {id: uuidv4(), name: 'Task2', done: false},

]

function App() {

const [task, setTask] = useState(initialTodos)


    return (
        <div className="App">
            <TodoList task={task} arrowUp={arrowUp}/>
        </div>
    );
}

export default App;