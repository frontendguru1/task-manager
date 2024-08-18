import {TaskItem} from "../index";

function TaskList() {
  return (
    <ul className={'grid grid-cols-4 gap-[15px]'}>
      <TaskItem />
    </ul>
  )
}

export default TaskList;
