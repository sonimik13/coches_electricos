import React from "react";

function Factura(props) {
    console.log(props)
    const [user, setUser] = useState();

    const 
    return (
        <>
            <div className="info-factura">
                <div className="importe">
                    <h4>{props.factura.importe}</h4>
                </div>
                <div className="info">
                    
                    <h3>Id:  {props.factura.idFactura}</h3>
                    <h4>{props.factura.concepto}</h4>
                    <p>{props.factura.direccion && props.factura.direccion[1]}</p>
                    {/* <p>{props.factura.direccion && props.factura.direccion[2]}</p> */}
                    <p>{props.factura.direccion && props.factura.direccion[7]}</p>
                    <p>{props.factura.direccion && props.factura.direccion[4]}</p>
                    {/* <p>{props.factura.direccion[7]},{props.factura.direccion[4]}</p> */}
                   
                    <p>Fecha:  {props.factura.fecha.split("T")[0]}</p>
                </div>
            </div>
        </>

    );

}

export default Factura;