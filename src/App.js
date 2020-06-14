import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 1, name: 'Test1', done: false},
]

function App() {

    const [todos, setTodos] = useState(initialTodos);

    const onCreateTask = (task) => {
        console.log(task)
        const updateCreateTodos = [...todos];
        updateCreateTodos.push({id: Math.random(), name: task, done: true})
        setTodos(updateCreateTodos)
    }

    const onDeleteTask = (id) => {
        console.log(id)
    }

    return (
        <div className="App">
            <TodoList todos={todos} onDeleteTask={onDeleteTask}/>
            <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;