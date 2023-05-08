import "./styleCards.css"

const CardProductos = ({productos}) => {
  return (
    <section className="card">
        {
            productos.map((producto) =>(
                <section className="cardProductos">
                    <h3>{producto.nombre}</h3>
                    <h1>{producto.cantidad}</h1>
                </section>
            ))
        }
    </section>
  )
}

export default CardProductos