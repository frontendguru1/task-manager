import { createBrowserRouter } from "react-router-dom";
import AppContainer from "../App";
import AddTask from "../container/AddTask/AddTask";
import CompletedTask from "../container/CompletedTask/CompletedTask";
import { Dashboard, TaskListContainer } from "../container";

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
        element: <Dashboard />,
      },
      {
        path: '/add-task',
        element: <AddTask />,
      },
      {
        path: '/completed-task',
        element: <CompletedTask />,
      }
    ]
  }
]);
