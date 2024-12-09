import { useState } from 'react'
import Banner from './components/Banner/Banner'
import CampoTexto from './components/CampoTexto/CampoTexto'
import Formulario from './components/Formulario'
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      nome: 'Programação',
      colorPrimaria: '#57c278',
      colorSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      colorPrimaria: '#82cffa',
      colorSecundaria: '#e8f8ff',
    },
    {
      nome: 'Data Science',
      colorPrimaria: '#a6d157',
      colorSecundaria: '#f0f8e2',
    },
    {
      nome: 'Devops',
      colorPrimaria: '#e06b69',
      colorSecundaria: '#fde7e8',
    },
    {
      nome: 'Ux e design',
      colorPrimaria: '#db6ebf',
      colorSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      colorPrimaria: '#ffba05',
      colorSecundaria: '#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      colorPrimaria: '#ff8a29',
      colorSecundaria: '#ffeedf',
    },

  ]
  const onColaborador = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} setColaboradores={colaborador => onColaborador(colaborador)} />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          colorPrimaria={time.colorPrimaria}
          colorSecundaria={time.colorSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Rodape />
    </>


  )
}

export default App
