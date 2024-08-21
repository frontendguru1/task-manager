import { Outlet } from 'react-router-dom';
// import {TaskListContainer} from '../index';

function AppOutlet() {
  return (
    <div className={'flex-grow p-6 overflow-y-auto h-screen'}>
      {/* <TaskListContainer /> */}
      <Outlet />
    </div>
  )
}

export default AppOutlet;
