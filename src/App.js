import React, {useEffect, useState} from 'react';
import './App.css';
// import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";
import axios from "axios";


function App() {



const [task, setTask] = useState([])

    const onCreateTask = async (tasks, _id) => {
        await axios.post('http://localhost:5000/todo', {name: tasks})
            .then(function (response) {
                    // handle success
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                // handle success
                const updateResponse = response.data;
                setTask(updateResponse)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const onDeleteTask = (_id) => {
        axios.delete(`http://localhost:5000/todo/${_id}`)
            .then(function (response) {
                // handle success
                const updateDelete = task.filter(el => el._id !== _id)
                setTask(updateDelete)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const onDoneTask = (_id) => {
       const updateDoneToggle = task.map(el => {
           if(el._id === _id) return {...el, done: !el.done}
           else return el;
       })
        setTask(updateDoneToggle)
    }



const onUpTask = (index) => {
    if(index === 0) return
    const updateUp = task.map((el, i) => {
        if(index === i) return task[index - 1]
        if(index -1 === i) return task[index]
        return el;
    })
    setTask(updateUp)
}

const onDownTask = (index) => {
    if(index +1 === task.length) return
    const updateDown = task.map((el, i) => {
        if(index === i) return task[index +1]
        if(index + 1 === i) return task[index]
        return el;
    })
    setTask(updateDown)
}

useEffect(() => {
    axios.get('http://localhost:5000/todo')
        .then(function (response) {
            // handle success
            const updateResponse = response.data;
            setTask(updateResponse)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
},[])







    return (
        <div className="App">
            <CreateForm onCreateTask={onCreateTask}/>
            <TodoList task={task} onDoneTask={onDoneTask} onDeleteTask={onDeleteTask} onUpTask={onUpTask} onDownTask={onDownTask}/>
        </div>
    );
}

export default App;
