import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: true},
    {id: 3, name: 'Test3', done: false},
    ];

function App() {

   const [todos, setTodos] = useState(initialTodos);

   const onCreateTask = (task) => {
       console.log('APP task' + task);
       const updateTodos = [...todos];
       updateTodos.push({id: Math.random(), name: task, done: false});
       setTodos(updateTodos)
   }

   const onTaskDelete = (id) => {
       console.log('APP delete ' + id)
       const updateTodos = todos.filter(el => el.id !== id)
       setTodos(updateTodos);
   }

    const onTaskDone = (id) => {
        console.log('APP delete ' + id)
        const updateTodos = todos.map(el => {
            if(el.id === id) return {...el, done: true}
            else return el;
        })
        setTodos(updateTodos)
    }


    return (
        <div className="App">
           <TodoList todos={todos} onTaskDelete={onTaskDelete} onTaskDone={onTaskDone}/>
           <TodoCreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;
