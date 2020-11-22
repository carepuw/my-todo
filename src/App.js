import React, {useState} from 'react';

import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'

import DB from './DB.json'

import './App.scss';

function App() {
  const [tasks, setTasks] = useState(DB.tasks);

  const createNewTask = (obj) => {
    let newTask = [...tasks, obj]
    setTasks(newTask);
  }

  const completeTask = (i) => {
    tasks.map( item => {
      if (item.id === +i) {
        item.complete = !item.complete;
        let render = [...tasks];
        setTasks(render);
      }
      return 0
    })
  }

  const removeTask = (i) => {
    let index = -1;
    tasks.map( (item) => {
      index++;
      if (item.id === +i) {
        const newMas = [...tasks];
        newMas.splice(index, 1);
        setTasks(newMas);
      }
      return 0;
    })
  }

  return (
    <div className="todo">
      <div className="headerName">
        Perfect To-Do.
      </div>
      <AddTask 
        add={createNewTask} 
      />
      <Tasks 
        item={tasks}
        remove={removeTask}
        complete={completeTask}
      />
    </div>
  );
}

export default App;
