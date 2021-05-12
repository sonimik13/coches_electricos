import React from "react";

function Factura(props) {
    return (
        <>
            <div className="info-factura">
                <div className="importe">
                    <h4>{props.factura.importe}</h4>
                </div>
                <div className="info">
                    <h4>{props.factura.nombre}</h4>
                    <h4>{props.factura.concepto}</h4>
                    <p>{props.factura.direccion[2]}</p>
                    <p>{props.factura.direccion[4]}</p>
                    <p>{props.factura.direccion[7]}</p>
                    <p>{props.factura.fecha.split("T")[0]}</p>
                </div>
            </div>
        </>

    );

}

export default Factura;