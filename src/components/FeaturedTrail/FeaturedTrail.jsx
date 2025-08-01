import trilhas from '@/trilhas/trilhas.json'
import styled from "styled-components"
import { useState } from "react"
import { Card } from '../Card';
import { Modal } from '../Modal';
import { Link } from 'react-router';

const Container = styled.div`
    width: 100%;
    padding: 54px 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: var(--white);
`

const ContainerTrail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const Button = styled(Link)`
    all: unset;
    display: block;
    font-size: 18px;
    border-radius: 99px;
    background-color: var(--green);
    color: var(--black);
    border: 1px solid var(--dark-green);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 43px;
    margin-top: 36px;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;

    &:active {
    background-color: var(--active-green)
  }

`

export function FeaturedTrail() {
    const [cardSelecionado, setCardSelecionado] = useState(null);

    const cards = [];
    for (let i = 0; i < 3 && i < trilhas.length; i++) {
        cards.push(
            <Card key={i} {...trilhas[i]} onClick={() => setCardSelecionado(trilhas[i])} />
        );
    }

    return (
        <Container>
            <Title>Principais Trilhas</Title>
            <ContainerTrail>
                {cards}
            </ContainerTrail>
            {
                cardSelecionado && (
                    <Modal card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                )
            }
            <Button to="/trilhas">Conheça mais!</Button>
        </Container>
    )
}
