import { Card } from "./components/Card/Card"
import { Cover } from "./components/Cover"
import { NavBar } from "./components/NavBar/NavBar"
import trilhas from './trilhas/trilhas.json'
import styled from "styled-components"
import { useState } from "react"
import { Modal } from "./components/Modal"

function App() {

  const [trilhaSelecionada, setTrilhaSelecionada] = useState(null);


  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

  return (
    <>
      <NavBar/>
      <Cover/>
      <Container>
        {
          trilhas.map((trilha, index) => (
            <Card key={index} {...trilha} onClick={() => setTrilhaSelecionada(trilha)}/>
          ))
        }
      </Container>
      {trilhaSelecionada && (
    <Modal trilha={trilhaSelecionada} onClose={() => setTrilhaSelecionada(null)} />
)}

    </>
  )
}

export default App
