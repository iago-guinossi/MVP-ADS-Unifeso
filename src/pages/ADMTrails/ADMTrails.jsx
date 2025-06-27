import { Footer } from "@/components/Footer/Footer"
import trilhas from '@/trilhas/trilhas.json'
import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { ModalEdit } from "../../components/ModalEdit";
import { ADMNavBar } from "../../components/ADMNavBar";

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

const CreateButton = styled.button`
    padding: 8px 16px;
    background: var(--white);
    color: var(--black);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 16px;
`

export function ADMTrails() {

    const [cardSelecionado, setCardSelecionado] = useState(null);

    const newCard = {
        "name": "",
        "sumarry": "",
        "map": "",
        "images": [],
        "distance":"",
        "location":""
    }

    return (
        <>
            <ADMNavBar />
            <Container>
                <Title>Edição Trilhas</Title>
                <CreateButton onClick={() => setCardSelecionado(newCard)}>Criar Card</CreateButton>
                <SubContainer>
                    {trilhas.map((trilha, index) => (
                        <Card key={index} {...trilha} onClick={() => setCardSelecionado(trilha)} />
                    ))
                    }
                </SubContainer>
                {
                    cardSelecionado && (
                        <ModalEdit card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                    )
                }
            </Container>
            <Footer />
        </>
    )
}