import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'
const Formulario = ({ colaboradores, setColaboradores, times }) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const onSubmit = (event) => {
        event.preventDefault()
        setColaboradores({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} setValor={setNome} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto valor={cargo} setValor={setCargo} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto valor={imagem} setValor={setImagem} label='Imagem' placeholder='Digite o endereço' />
                <ListaSuspensa valor={time} setValor={valor => setTime(valor)} label='time' options={times} />
                <Botao >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;