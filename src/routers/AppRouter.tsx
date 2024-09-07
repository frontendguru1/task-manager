import { createHashRouter } from "react-router-dom";
import AppContainer from "../App";
import { DashboardContainer, TaskListContainer, CompletedTaskContainer, AddTaskContainer } from "../container";
import { Error } from "../components";

export const AppRouter = createHashRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
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
