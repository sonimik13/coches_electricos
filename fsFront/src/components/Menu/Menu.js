import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import FetchUser from "../../Hooks/FetchUser";
import FetchLogout from "../../Hooks/FetchLogout";
import './Menu.css'

function Menu() {
  const [user, setUser] = useState();
  const dataContext = useContext(AuthContext);

  useEffect(() => {
    const fetch1 =  async () => {
      const result = await FetchUser(localStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  const logout = async () => {
    const result = await FetchLogout(sessionStorage.getItem('token'));
    const data = await result.json();

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
        <h3>Hannes<br/>Damhall</h3>
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