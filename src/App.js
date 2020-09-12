import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList";

const taski = [
    {id: uuidv4(), nameTask: 'Name One', done: false, priority: 10},
    {id: uuidv4(), nameTask: 'Name Two', done: false, priority: 20},
    {id: uuidv4(), nameTask: 'Name Three', done: false, priority: 30},
]

function App() {

    const [tasks, setTasks] = useState(taski)

    const onUpTask = (index) => {
        if(index === 0) return
        const unRealUpTask = tasks.map((el, i) => {
            if (index === i) return tasks[index - 1];
            if ((index - 1) === i) return tasks[index];
            return el;
        })
        setTasks(unRealUpTask)
    }

dsadasdadasdad
    const onDownTask = (index) => {
        if(index === 0) return
        const unRealUpTask = tasks.map((el, i) => {
            if (index === i) return tasks[index + 1];
            if ((index + 1) === i) return tasks[index];
            return el;
        })
        setTasks(unRealUpTask)
    }


    return (
        <div className="App">
            <TodoList tasks={tasks} onUpTask={onUpTask} onDownTask={onDownTask}/>
        </div>
    );
}

export default App;

