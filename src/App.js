import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: true},
    {id: 3, name: 'Test3', done: false},
]

function App() {
const [todos, setTodos] = useState(initialTodos);

const onCreateTask = (task) => {
    console.log('APP task' + task)
    const updatedTodos = [...todos];
    updatedTodos.push({id: Math.random(), name: task, done: false});
    setTodos(updatedTodos)
}

const onDeleteTask = (id) => {
    console.log('APP' + id);
    const updateDeleteTask = todos.filter(el => el.id !==id)
    setTodos(updateDeleteTask)
}

const onDoneTask = (id) => {
    const updateDoneTask = todos.map(el => {
        if(el.id === id) return {...el, done: !el.done}
        else return el;
    })

    setTodos(updateDoneTask)
};

    return (
        <div className="App">
 <TodoList todos={todos} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/>
 <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
