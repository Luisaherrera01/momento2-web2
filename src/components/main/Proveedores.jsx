import Header from "../header/Header"
import CardProveedores from "../cards/CardProveedores"

const Proveedores = () => {
  const proveedores =[
    {
      nombre:"Zara",
      direccion: "calle abajo"
    },
    {
      nombre:"Zara",
      direccion: "calle abajo"
    },
    {
      nombre:"Zara",
      direccion: "calle abajo"
    },
  ]
  return (
    <section>
      <Header/>
      <section >
        <CardProveedores proveedores = {proveedores}/>
      </section>
    </section>
  )
}

export default Proveedores