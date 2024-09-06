import { createBrowserRouter } from "react-router-dom";
import AppContainer from "../App";
import { DashboardContainer, TaskListContainer, CompletedTaskContainer, AddTaskContainer } from "../container";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: '',
    children: [
      {
        path: "",
        element: <TaskListContainer />
      },
      {
        path: '/dashboard',
        element: <DashboardContainer />,
      },
      {
        path: '/add-task',
        element: <AddTaskContainer />,
      },
      {
        path: '/completed-task',
        element: <CompletedTaskContainer />,
      }
    ]
  }
]);
