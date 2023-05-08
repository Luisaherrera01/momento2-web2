

const CardCliente = ({clientes}) => {
  return (
    <section>
        {
            clientes.map((cliente) =>(
                <section>
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