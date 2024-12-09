import './ListaSuspensa.css'

const ListaSuspensa = ({ label, options, valor, setValor }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => setValor(evento.target.value)} value={valor}>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))
                }
            </select>

        </div>
    )
}

export default ListaSuspensa;