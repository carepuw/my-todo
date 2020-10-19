import React, {useState} from 'react'

import './index.scss'

const AddTask = ( {add} ) => {
    const [inputValue, setInputValue] = useState('');

    const addNewTask = () => {
        if (inputValue) {
            const newTask = {"id": Math.random(), "name": inputValue};
            add(newTask);
            setInputValue('');
        } else alert('Enter task name');
    }

    const keyEnter = (e) => {
        if (e.key === 'Enter') {
            addNewTask();
        }
    }

    return (
        <div className="add-task">
            <input 
                maxLength="50"
                placeholder="Enter task name"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={keyEnter}
            />
            <button onClick={addNewTask}>Create</button>
        </div>
    )
}

export default AddTask;