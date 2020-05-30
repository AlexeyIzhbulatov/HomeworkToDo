import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test', done: false},
    {id: 2, name: 'Test 2', done: true},
    {id: 3, name: 'Test 3', done: true}
]

function App() {
    const [todos, setTodos] = useState(initialTodos)

    const onTaskCreate = (task) => {
        console.log('APP' + task)
        const updatedTodos = [...todos];
        updatedTodos.push({id: Math.random(), name: task, done: false},)
        setTodos(updatedTodos);
    }

    const onTaskDelete = (id) => {
        console.log('APP delete' + id)
        const updatedTodos = todos.filter(el => el.id !== id)
        setTodos(updatedTodos)
    }

    const onTaskDone = (id) => {
        const updatedTodos = todos.map(el => {
            if (el.id === id) return { ...el, done: true }
            else return el;
        })

        setTodos(updatedTodos);
    };


    return (
        <div className="App">
            <TodoList todos={todos} onTaskDelete={onTaskDelete} onTaskDone={onTaskDone}/>
            <TodoCreateForm onTaskCreate={onTaskCreate}/>
        </div>
    );
}

export default App;
