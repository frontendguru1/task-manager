import { useEffect, useState } from "react";
import { PageTitle, TaskList } from "../../components";
import { getExistingTasks } from "../../utils/utils";
import { iTaskItem } from "../../models/models";

function TaskListContainer() {
  const tasks = getExistingTasks();
  const [taskList, setTaskList] = useState<iTaskItem[]>(tasks);
  

  const onCompleteHandler = () => {}
  const onEditHandler = () => {}
  const onDeleteHandler = () => {}
  
  useEffect(() => {
    
    setTaskList(tasks);
    console.log(taskList, 'taskList');
    
  }, []);

  return (
    <div>
      <PageTitle title={'Task List'} />
      <TaskList tasks={taskList} onComplete={onCompleteHandler} onEdit={onEditHandler} onDelete={onDeleteHandler} />
    </div>
  )
}

export default TaskListContainer;
