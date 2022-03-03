
import React, {useState, useEffect} from 'react';

import "./Contador.css";

const Contador = (props) => {

    const [valor, setValor] = useState(0);

    const operar = (operacion) => {

        if(operacion === "sumar"){
            setValor(valor + props.paso)
        }else{
            setValor(valor - props.paso)
        }

    }

    return(
        <div className='designContador'>

            <div className="designClicker colorMas" onClick={()=>operar("sumar")}>+</div>
            <div className="designCifra">{valor}</div>
            <div className="designClicker colorMenos" onClick={()=>operar("Andreu")}>-</div>

        </div>
    )
}

export default Contador;