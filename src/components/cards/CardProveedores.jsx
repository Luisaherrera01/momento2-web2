import "./styleCards.css"

const CardProveedores = ({proveedores}) => {
  return (
    <section className="card">Proveedores
        {
            proveedores.map((proveedor) =>(
                <section className="cardProveedores">
                    <h3>{proveedor.nombre}</h3>
                    <h1>{proveedor.direccion}</h1>
                </section>
            ))
        }
    </section>
  )
}

export default CardProveedores