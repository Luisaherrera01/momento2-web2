import "./styleCards.css"

const CardCliente = ({clientes}) => {
  return (
    <section className="card">
        {
            clientes.map((cliente) =>(
                <section className="cardCliente">
                    <h3>{cliente.nombre}</h3>
                    <h3>{cliente.apellido}</h3>
                    <h1>{cliente.direccion}</h1>
                </section>
            ))
        }
    </section>
  )
}

export default CardCliente