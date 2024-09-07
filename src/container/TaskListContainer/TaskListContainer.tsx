import { useEffect, useState } from "react";
import { PageTitle, TaskList } from "../../components";
import { getExistingTasks } from "../../utils/utils";
import { iTaskItem } from "../../models/models";

function TaskListContainer() {
  const tasks = getExistingTasks();
  const [taskList, setTaskList] = useState<iTaskItem[]>(tasks);
  

  const onCompleteHandler = (item: iTaskItem) => {
    const updatedTasks = taskList.map(task => (task.id == item.id ? {...task, isCompleted: !task.isCompleted} : task));
    if(updatedTasks) {
      setTaskList(updatedTasks);
    }
  }

  const onEditHandler = () => {}

  const onDeleteHandler = (item: iTaskItem) => {
    setTaskList(taskList.filter(taskId => taskId.id !== item.id));
  }
  
  useEffect(() => {
    // setTaskList(tasks);
    // console.log(taskList, 'taskList...');
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
  }, [taskList]);

  return (
    <div>
      <PageTitle title={'Task List'} />
      <TaskList tasks={taskList} onComplete={onCompleteHandler} onEdit={onEditHandler} onDelete={onDeleteHandler} />
    </div>
  )
}

export default TaskListContainer;
