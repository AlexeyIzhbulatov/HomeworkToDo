import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test', done: true},
    {id: 2, name: 'Test', done: false},
    {id: 3, name: 'Test', done: true},
]

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const onCreateTask = (task) => {
        console.log('APP' + task)
        const updatedTodos = [...todos];
        updatedTodos.push({id: Math.random(), name: task, done: false});
        setTodos(updatedTodos)
    }

    const onTaskDelete = (id) => {
        console.log('APP Delete ' + id);
        const updatedTodos = todos.filter(el => el.id !== id);
        setTodos(updatedTodos);
    }

    const onTaskDone = (id) => {
        console.log('APP Delete ' + id);
        const updatedTodos = todos.filter(el => el.id == id);
        setTodos(updatedTodos);
    }

    return (
        <div className="App">
            <TodoList todos={todos} onTaskDelete={onTaskDelete} onTaskDone={onTaskDone}/>
            <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
