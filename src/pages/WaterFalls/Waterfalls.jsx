import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer/Footer"
import cachoeiras from '@/cachoeiras/cachoeiras.json'
import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";

const Container = styled.div`
    width: 100%;
    padding: 54px 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: var(--green);
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const SubContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export function Waterfalls() {

    const [cardSelecionado, setCardSelecionado] = useState(null);

    return (
        <>
            <NavBar />
            <Container>
            <Title>Cachoeiras Disponiveis</Title>

                <SubContainer>
                    {cachoeiras.map((cachoeira, index) => (
                        <Card key={index} {...cachoeira} onClick={() => setCardSelecionado(cachoeira)} />
                    ))
                    }
                </SubContainer>
                {
                    cardSelecionado && (
                        <Modal card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                    )
                }
            </Container>
            <Footer />
        </>
    )
}