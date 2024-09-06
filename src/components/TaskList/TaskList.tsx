// import { useState } from "react";
import {TaskItem} from "../index";
import { iTaskProps } from "../../models/models";

function TaskList({tasks, onComplete, onDelete, onEdit}: iTaskProps) {
  // const [taskItems, setTaskItems] = useState<iTaskProps>();
  console.log('tasks aaa', tasks);
  
  if(tasks.length == 0 ) {
    return (
      <div>Tasks not found!</div>
    )
  }

  return (
    <ul className={'grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[15px]'}>
      {
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit} />
        ))
        
        }
    </ul>
  )
}

export default TaskList;
