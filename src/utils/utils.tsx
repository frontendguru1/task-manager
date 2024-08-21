import { iTaskItem } from "../models/models";

export const getExistingTasks = () => {
  const existingTask = localStorage.getItem('tasks');
  if(existingTask) {
    // console.log(JSON.parse(existingTask));
    
    return JSON.parse(existingTask) as iTaskItem[];
  }
  console.log('task not found');
  
  return [];

};
