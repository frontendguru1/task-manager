import { Sidebar } from "./components"
import { AppOutlet } from "./container"

function AppContainer() {
  return (
    <>
    <div className={' h-screen w-full'}>
      {/* <h1 className={'text-center text-white py-8 text-5xl font-bold'}>Task Manager</h1> */}

      <div className="block md:flex">
        <Sidebar />
        <AppOutlet />
      </div>
    </div>
    </>
  )
}


export default AppContainer
