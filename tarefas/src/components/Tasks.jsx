import Task from "./Task"
import React from 'react';


function Tasks({tasks, handleTaskClick,handleTaskDeletion}){
    return(
        <>
        {tasks.map((task)=>(
            <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        ))}
        </>
    )
}

export default Tasks