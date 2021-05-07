import React, {useState}  from 'react'


export default function Coche (props) {
    const [coche, setCoche] = useState(props.coche.coche);
    const [cargador, setCargador] = useState(props.coche.cargador);
    const [color, setColor] = useState(props.coche.color);
    
    const handleCoche = (e) => {
        setCoche(e.target.value)
    }

    const handleCargador = (e) => {
        setCargador(e.target.value)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }


    return (
        <>
        <div className="info-coche" onClick={()=> props.select(props.coche)}>
            <div className="input-coche">
              <input type="text" value={coche} onChange={handleCoche}/>
            </div>
            <input type="text" value={cargador} onChange={handleCargador}/>
            <input type="text" value={color} onChange={handleColor}/>
            <input type="text" value={props.coche.matricula}/>
            <div className="editar-eliminar">
                <p>Editar</p>
                <p>Eliminar</p>
            </div>
          </div>
        </>
    )
}