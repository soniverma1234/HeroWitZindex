import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layour = () => {
  return (
    <>
     <Navbar/> 
     <main>
        <Outlet/>
     </main>
    </>
  )
}

export default Layour
