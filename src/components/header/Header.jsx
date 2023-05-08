
import Img from "../../imagenes/logo.jpg"
import Enlaces from "./Enlaces"
import "./styleHeader.css"

const Header = () => {

  return (
    <section className="header">
        <img src={Img} />
        <Enlaces/>
    </section>
  )
}

export default Header