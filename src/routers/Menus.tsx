import dashboardIcon from "../assets/img/dashboard.svg"
import taskListIcon from "../assets/img/task-list.svg"
import addTaskIcon from "../assets/img/add-task.svg"
import completedTaskIcon from "../assets/img/completed-task.svg"

export interface iMenu {
  title: string;
  icon: string;
  route: string;
}
export const Menus: iMenu[] = [
  {
    title: 'Dashboard',
    icon: dashboardIcon,
    route: '/dashboard'
  },
  {
    title: 'Task List',
    icon: taskListIcon,
    route: '/'
  },
  {
    title: 'Add a new Task',
    icon: addTaskIcon,
    route: '/add-task'
  },
  {
    title: 'Completed Task List',
    icon: completedTaskIcon,
    route: '/completed-task'
  },
];
