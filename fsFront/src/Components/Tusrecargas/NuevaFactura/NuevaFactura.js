import React, { useState } from "react";
import atras from "../../../Assets/atras.svg";
import FetchNewInvoice from "../../../Hooks/FetchCard";
import { Link, useHistory } from "react-router-dom";

function NuevaFactura(props){

    
    const history = useHistory();
    const [idFactura, setidFactura]=useState("");
    const [nombre, setNombre] = useState("");
    const [concepto, setConcepto] = useState("");
    const [importe, setImporte]= useState("");
    const [fecha, setFecha] =useState({dia:"", mes:"", año:""});
    const [token] = useState(sessionStorage.getItem("token"));


    const handleNombre = (e) =>{
        setNombre(e.target.value);
    };
    const handleConcepto = (e) =>{
        setConcepto(e.target.value);
    };
    const handleImporte = (e) =>{
        setImporte(e.target.value);
    };
    

    const handleFecha = (e)=>{
        setFecha({ mes: e.target.value });
    }

    const handleFecha2 =(e)=>{
        setFecha({dia: fecha.dia, mes: fecha.mes, año: e.target.value});
    }
    const handleidFactura =(e)=>{
        setidFactura(e.target.value);
    }
    const Fetch = async () => {
        const newInvoice = {
        idFactura: idFactura,
        nombre: nombre,
        concepto: concepto,
        fecha: `${fecha.dia}/${fecha.mes}/${fecha.año}`,
        importe: importe,
        token: props.token,
        };
    const result = await FetchNewInvoice(newInvoice,token);
    const data = await result.json();
        if (data.status === 200) {
             alert(data.data);
             history.push("/tusrecargas");
            } else if (data.status === 401) {
              alert(data.data);
            } else if (data.status === 500) {
                 alert(data.data);
                } else {
                    alert(data.data);
        }
  console.log(data);
};

return (
    <div className="todo-nuevafactura">
      <Link to="/tusrecargas">
        <img src={atras} alt="atras" />
      </Link>
      <div className="main-nuevafactura">
        <h1 className="titulo-facturas">Añade nueva factura</h1>
        <div className="info-factura">
          <div className="input-factura">
            <input type="text" onChange={handleNombre} placeholder="Nombre" />
            </div> 
            <div className="input-idfactura">
            <input
            type="text"
            onChange={handleidFactura}
            placeholder="idFactura"
          />
            </div>
            <div className="input-concepto">
            <input
            type="text"
            onChange={handleConcepto}
            placeholder="Concepto"
          />
          </div>
          <input type="text" onChange={handleImporte} placeholder="Importe" />
          

                 

          <div className="inputs2">
          
            <select name="dia-factura" id="dia-factura" onChange={handleFecha}>
              <option value="0">dia</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="1">13</option>
              <option value="2">14</option>
              <option value="3">15</option>
              <option value="4">16</option>
              <option value="5">17</option>
              <option value="6">18</option>
              <option value="7">19</option>
              <option value="8">20</option>
              <option value="9">21</option>
              <option value="10">22</option>
              <option value="11">23</option>
              <option value="12">24</option>
              <option value="7">25</option>
              <option value="8">26</option>
              <option value="9">27</option>
              <option value="10">28</option>
              <option value="11">29</option>
              <option value="12">30</option>
              <option value="12">31</option>
            </select>
            <select name="mes-factura" id="mes-factura" onChange={handleFecha}>
              <option value="0">mes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="año-factura" id="año-factura" onChange={handleFecha2}>
              <option value="0">año</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>
          
          
            </div>
        <div className="guardar-nuevafactura" onClick={Fetch}>
            <h3>Guardar</h3>
          </div>
      </div>
    </div>
  );


}

export default NuevaFactura;