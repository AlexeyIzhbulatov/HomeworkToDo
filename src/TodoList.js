import React from 'react';
import './App.css';
import CreateForm from "./CreateForm";



function TodoList(props) {

  const ok = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </svg>)

    const no = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>)

    const up = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up-short" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>)

    const down = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
        </svg>)

    return (
        <div>
            {
                props.task.map((el,index) => <li key={el.id}>{el.name}
                <span onClick={() => props.onDoneTask(el.id)}>{el.done ? <span>{ok}</span> : <span>{no}</span> }</span>
                  <button onClick={() => props.onUpTask(index)}>{up}</button>
                    <button onClick={() => props.onDownTask(index)}>{down}</button>
                    <button type="button" className="btn btn-danger" onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;
