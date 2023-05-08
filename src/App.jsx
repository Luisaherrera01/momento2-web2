import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/home/Home"
import Clientes from "./components/main/Clientes"
import Productos from "./components/main/Productos"
import Proveedores from "./components/main/Proveedores"

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    { 
        path: "/clientes",
        element: <Clientes/>
    },
    {
        path: "/productos",
        element: <Productos/>
    },
    {
        path: "/proveedores",
        element: <Proveedores/>
    }
])

function App() {
  return (
    <>
     <RouterProvider router ={router} />
    </>
  )
}

export default App
