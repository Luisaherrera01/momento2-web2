import Header from "../header/Header"
import CardProductos from "../cards/CardProductos"

const Productos = () => {
  const productos =[
    {
      nombre:"Camisas",
      cantidad:2
    },
    {
      nombre:"Camisas",
      cantidad:2
    },
    {
      nombre:"Camisas",
      cantidad:2
    },
  ]
  return (
    <section>
      <Header/>
      <section >
        <CardProductos productos = {productos}/>
      </section>
    </section>
  )
}

export default Productos