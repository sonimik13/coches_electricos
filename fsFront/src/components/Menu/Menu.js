import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import FetchLogout from "../../Hooks/FetchLogout";
import './Menu.css'

function Menu(props) {
  const dataContext = useContext(AuthContext);

  const logout = async () => {
    const result = await FetchLogout(sessionStorage.getItem('token'));
    const data = await result.json();
    dataContext.toggleMenu()

    if (data.status === 200) {
      alert(data.data);
      dataContext.logout()
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    } else {
      alert(data.data);
    }
  };

  return (
    <div className={`menu-desplegable ${dataContext.menu}`}>
      <div className="perfil">
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <h3>{props.data ? props.data.name : ""}<br/>{props.data ? props.data.surname : ""}</h3>
      </div>
      <ul className="menu-listado">
        <li>Tus recargas</li>
        <li>Pago</li>
        <li>Configuración</li>
        <li onClick={logout}>Logout</li>
        <li onClick={dataContext.toggleMenu}>Atras</li>
      </ul>
    </div>
  );
}

export default Menu;