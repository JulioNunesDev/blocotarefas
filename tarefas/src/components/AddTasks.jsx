import { useState } from 'react'
import './AddTask.css'
import Button from './Button'
function AddTasks({handleTaskAddition}) {

    const [inputData, setInputData] = useState('')

    const handleInputChange =(e)=>{
        setInputData(e.target.value)
    }


    const handleAddTaskClick =()=>{
        handleTaskAddition(inputData) 
        setInputData('')
    }

    return(
        <div className="add_task_container">


       <input className="add_task_input" type="text" value={inputData}  onChange={handleInputChange}/>


            <div className='add_task_button_container'>
            <Button onClick={handleAddTaskClick}>
                Adicionar
            </Button>
            </div>
            
        </div>
    )
}

export default AddTasks