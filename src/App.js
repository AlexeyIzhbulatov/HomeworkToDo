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

    const [todos, setTodos] = useState(initialTodos)

    const onrCreateTask = (task) => {
        console.log('APP task' + task);
const updateCreateTask = [...todos];
updateCreateTask.push({id: Math.random(), name: task, done: false})
        setTodos(updateCreateTask);
    }

    const onDeleteTask = (id) => {
        console.log('APP delete' + id)
        const updateDeleteTask = todos.filter(el => el.id !==id)
        setTodos(updateDeleteTask)
    }

    const onTaskDoneToggle = (id) => {
        const updatedTodos = todos.map(el => {
            if(el.id === id) return {...el, done: !el.done}
            else return el;
        })
        setTodos(updatedTodos)
    };

    return (
        <div className="App">
 <TodoList todos={todos} onDeleteTask={onDeleteTask} onTaskDoneToggle={onTaskDoneToggle}/>
 <TodoCreateForm onCreateTask={onrCreateTask}/>
        </div>
    );
}

export default App;
