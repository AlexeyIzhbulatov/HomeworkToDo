import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: false},
]

function App() {
    const [todos, setTodos] = useState(initialTodos)

    const onCreateTask = (task) => {
        console.log(task)
        const updateOnCreateTask = [...todos];
        updateOnCreateTask.push({id: Math.random(), name: task, done: false})
        setTodos(updateOnCreateTask)
    }

    const onDeleteTask = (id) => {
        const onDeleteTask = todos.filter(el => el.id !== id)
    }

    return (
        <div className="App">
            <TodoList todos={todos} onDeleteTask={onDeleteTask}/>
            <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;