import trilhas from '@/trilhas/trilhas.json'
import styled from "styled-components"
import { useState } from "react"
import { Card } from '../Card';
import { Modal } from '../Modal';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    `

export function FeaturedTrail() {
    const [trilhaSelecionada, setTrilhaSelecionada] = useState(null);
    return (
    <>
        <Container>
            {
                trilhas.map((trilha, index) => (
                    <Card key={index} {...trilha} onClick={() => setTrilhaSelecionada(trilha)} />
                ))
            }
        </Container>
      {
        trilhaSelecionada && (
            <Modal trilha={trilhaSelecionada} onClose={() => setTrilhaSelecionada(null)} />
        )
    }
    </>
    )
}
