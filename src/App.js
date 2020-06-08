import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: false},
    {id: 3, name: 'Test3', done: false},

]

function App() {

    const [todos, setTodos] = useState(initialTodos)

    const onCreateTask = (task) => {
        console.log('App' + task)
        const updateTodos = [...todos];
        updateTodos.push({id: Math.random(), name: task, done: false});
        setTodos(updateTodos)
    }

    const onTaskDelete = (id) => {
        console.log(id);
        const updateDelete = todos.filter(el => el.id !== id)
        setTodos(updateDelete)
    }

    const onTaskDoneToggle = (id) => {
        const updateTaskDone = todos.map(el => {
            if (el.id === id) return {...el, done: !el.done}
            else return el;
        })
        setTodos(updateTaskDone)
    }

    const onTaskSave = (task) => {
        const updateTaskSave = todos.map(el => {
            if (el.id === task.id) return {...el, name: task.name}
            else return el;
        });
        setTodos(updateTaskSave)
    }


    return (
        <div className="App">
            <TodoList todos={todos} onTaskDelete={onTaskDelete} onTaskDoneToggle={onTaskDoneToggle}
                      onTaskSave={onTaskSave}/>
            <TodoCreateForm onCreateTask={onCreateTask}/>

        </div>
    );
}

export default App;
