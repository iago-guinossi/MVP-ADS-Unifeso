import { ADMNavBar } from "@/components/ADMNavBar"
import { Footer } from "@/components/Footer"
import eventos from '@/eventos/eventos.json'
import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { ModalEdit } from "../../components/ModalEdit";

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

const EventContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export function ADMEvents() {

    const [cardSelecionado, setCardSelecionado] = useState(null);

    return (
        <>
            <ADMNavBar />
            <Container>
            <Title>Edição Eventos</Title>

                <EventContainer>
                    {eventos.map((evento, index) => (
                        <Card key={index} {...evento} onClick={() => setCardSelecionado(evento)} />
                    ))
                    }
                </EventContainer>
                {
                    cardSelecionado && (
                        <ModalEdit isEvent card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                    )
                }
            </Container>
            <Footer />
        </>
    )
}