import { ADMNavBar } from "@/components/ADMNavBar"
import { Footer } from "@/components/Footer"
import cachoeiras from '@/cachoeiras/cachoeiras.json'
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

export function ADMWaterfalls() {

    const [cardSelecionado, setCardSelecionado] = useState(null);

    const newCard = {
        "name": "",
        "sumarry": "",
        "map": "",
        "images": [],
        "location":""
    }

    return (
        <>
            <ADMNavBar />
            <Container>
            <Title>Edição Cachoeiras</Title>
                <CreateButton onClick={() => setCardSelecionado(newCard)}>Criar Card</CreateButton>
                <SubContainer>
                    {cachoeiras.map((cachoeira, index) => (
                        <Card key={index} {...cachoeira} onClick={() => setCardSelecionado(cachoeira)} />
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