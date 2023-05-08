import Header from "../header/Header"
import Cardcliente from "../cards/CardCliente"

const Clientes = () => {
  const clientes =[
    {
      nombre:"Carlos",
      apellido:"Martinez",
      direccion:"Calle la geta"
    },
    {
      nombre:"Carlos",
      apellido:"Martinez",
      direccion:"Calle la geta"
    },
    {
      nombre:"Carlos",
      apellido:"Martinez",
      direccion:"Calle la geta"
    }
  ]
  return (
    <section>
      <Header/>
      <section >
        <Cardcliente clientes = {clientes}/>
      </section>
      
    </section>
  )
}

export default Clientes