import { Link } from "react-router-dom"

const Enlaces = () => {
  return (
    <section className="nav">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/clientes"}>Clientes</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/proveedores"}>Proveedores</Link>
      </nav>
    </section>
  )
}

export default Enlaces