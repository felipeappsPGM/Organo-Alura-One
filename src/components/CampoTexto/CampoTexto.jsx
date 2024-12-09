import { useState } from 'react';
import './CampoTexto.css'
const CampoTexto = ({ label, placeholder, valor, setValor }) => {

    const onValue = (event) => {
        setValor(event.target.value);
    }

    return (

        <div className="campo-texto">
            <label>{label}</label>
            <input onChange={onValue} type="text" value={valor} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;