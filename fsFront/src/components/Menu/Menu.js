import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import './Menu.css'

function Menu() {
  const dataContext = useContext(AuthContext);

  return (
    <div className={`menu-desplegable ${dataContext.menu}`}>
      <div className="perfil">
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <h3>Hannes <br/> Dammhal</h3>
      </div>
      <ul className="menu-listado">
        <li>Tus recargas</li>
        <li>Pago</li>
        <li>Configuración</li>
        <li onClick={dataContext.toggleMenu}>Atras</li>
      </ul>
    </div>
  );
}

export default Menu;