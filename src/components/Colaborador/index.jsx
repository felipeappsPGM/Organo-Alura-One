import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem }) => {
    return (
        <div className='colaborador'>
            <div>
                <img src={imagem} alt="perfil felipe github" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;