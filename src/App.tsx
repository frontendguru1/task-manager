import { Sidebar } from "./components"
import { Outlet } from "./container"

function App() {

  return (
    <>
    <div className={' h-screen w-full'}>
      {/* <h1 className={'text-center text-white py-8 text-5xl font-bold'}>Task Manager</h1> */}

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default App
