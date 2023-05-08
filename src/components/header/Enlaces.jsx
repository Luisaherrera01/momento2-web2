import { Link } from "react-router-dom"

const Enlaces = () => {
  return (
    <section className="nav">
      <ul>
        <li><Link to={"/"} className="link">Home</Link></li>
        <li><Link to={"/clientes"}>Clientes</Link></li>
        <li><Link to={"/productos"}>Productos</Link></li>
        <li><Link to={"/proveedores"}>Proveedores</Link></li>
      </ul>
    </section>
  )
}

export default Enlaces