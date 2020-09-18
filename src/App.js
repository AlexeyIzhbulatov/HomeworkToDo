import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";

const initialTodos = [
    {id: uuidv4(), name: 'Task1', done: false},
    {id: uuidv4(), name: 'Task2', done: false},

]

function App() {

const [task, setTask] = useState(initialTodos)

    const onCreateTask = (tasks) => {
    console.log(tasks)
        const updateCreateTask = [...task]
        updateCreateTask.push({id: uuidv4(), name: tasks, done: false})
        setTask(updateCreateTask)
    }

    const onDoneTask = (id) => {
       const updateDoneToggle = task.map(el => {
           if(el.id === id) return {...el, done: !el.done}
           else return el;
       })
        setTask(updateDoneToggle)
    }

    const onDeleteTask = (id) => {
    const updateDeleteTask = task.filter(el => el.id !== id)
        setTask(updateDeleteTask)
    }

    const onUpTask = (index) => {
    if(index === 0) return
    const updateUp = task.map((el, i) => {
        if(index === i) return task[index - 1]
        if(index -1 === i) return task[index]
        return el;
    })
        setTask(updateUp)
    }

    const onDownTask = (index) => {
    if(index +1 === task.length) return
    const updateDown = task.map((el, i) => {
        if(index === i) return task[index +1]
        if(index + 1 === i) return task[index]
        return el;
    })
        setTask(updateDown)
    }




    return (
        <div className="App">
            <CreateForm onCreateTask={onCreateTask}/>
            <TodoList task={task} onDoneTask={onDoneTask} onDeleteTask={onDeleteTask} onUpTask={onUpTask} onDownTask={onDownTask}/>
        </div>
    );
}

export default App;