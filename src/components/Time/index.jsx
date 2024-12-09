import Colaborador from '../Colaborador';
import './Time.css'

const Time = ({ nome, colorPrimaria, colorSecundaria, colaboradores }) => {
    return (

        colaboradores.length > 0 && (
            <section
                className='time'
                style={{
                    backgroundColor: colorSecundaria

                }}>
                <h3 style={{ borderColor: colorPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => (
                        <Colaborador
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />
                    ))}

                </div>

            </section >
        )


    )
}

export default Time;