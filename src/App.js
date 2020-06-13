import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: true},
]

function App() {

    const [todos, setTodos] = useState(initialTodos)

const onCreateTask = (task) => {
    console.log('APP' + task);
    const updateCreateTask = [...todos];
    updateCreateTask.push({id: Math.random(), name: task, done: true})
    setTodos(updateCreateTask)
}

const onDelete = (id) => {
  const updateOnDelete = todos.filter(el => el.id !== id);
    setTodos(updateOnDelete)
}

const onDoneTaskToggle = (id) => {
        const updateDoneTask = todos.map(el => {
            if(el.id === id) return {...el, done: !el.done}
            else return el;
        })
    setTodos(updateDoneTask)
}


    return (
        <div className="App">
            <TodoList todos={todos} onDelete={onDelete} onDoneTaskToggle={onDoneTaskToggle}/>
<TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
куцуаывавыаыв
выфвыфвфывфвфв
adadadadada