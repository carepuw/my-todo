import React from 'react'

import './index.scss'

const Tasks = ( {item, remove, complete} ) => {
    
    const completeTask = (item) => {
        complete(item.target.id);
    }

    const removeTask = (item) => {
        remove(item.target.id);
    }

    return (
        <div className="tasks">
            <ul className="tasks-row">
                {item.map( (items,index) => (
                    <div className="tasks-row-item" key={index}>
                        <li className={`task__name ${items.complete ? 'comp': ''}`}>
                            {items.name}
                        </li>
                        <button 
                            id={items.id} 
                            onClick={completeTask} 
                            className="task__button"
                        >Complete</button>
                        <button 
                            id={items.id} 
                            onClick={removeTask} 
                            className="task__button"
                        >Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;