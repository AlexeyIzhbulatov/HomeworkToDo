import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: true},
]

function App() {

    const [todos, setTodos] = useState(initialTodos);


    return (
        <div className="App">
            <TodoList todos={todos}/>
<TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
