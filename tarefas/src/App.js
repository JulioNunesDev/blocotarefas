import React,{useState} from 'react';
import "./App.css"
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const [tasks, setTasks]= useState([
    {
    id:"1",
    title:"Ler Livros",
    completed: false,
  },
  {
    id:"2",
    title:"Estudos recentes",
    completed: false,
  },
])

const handleTaskClick =(taskId)=>{
  
const newTask = tasks.map(task =>{
  if(task.id == taskId)
   return {... task, completed: !task.completed}

  return task;
})
setTasks(newTask)
}

const handleTaskAddition = (taskTitle)=>{
const newTask = [... tasks,
  {
  title: taskTitle,
  id: uuidv4(),
  completed:false,
},
]
setTasks(newTask)
}

const handleTaskDeletion = (taskId)=>{
const newTask = tasks.filter(task => task.id !== taskId)
setTasks(newTask)
}



  return (

    <BrowserRouter>
      <div className='container_app'>
    <Header/>
      <Routes>
      <Route path='/' exact render={()=>(
        <>
      <AddTasks  handleTaskAddition={handleTaskAddition} />
      
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
        </>
      )}/>
      </Routes>
    </div>
    
      </BrowserRouter>
    



  );
}

export default App;
