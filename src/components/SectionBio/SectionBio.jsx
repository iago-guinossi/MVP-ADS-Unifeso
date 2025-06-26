import { Link } from "react-router";
import styled from "styled-components";

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

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const Text = styled.span`
    font-size: 18px;
    line-height: calc(18px * 1.5);
    max-width: 1150px;
    color: var(--black);
    margin-bottom: 12px;
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

export function SectionBio() {
    return (
        <Container>
            <Title>Biodiversidade do Parque Nacional da Serra dos Órgãos</Title>
            <Text>
                Localizado na região serrana do Rio de Janeiro, o Parque Nacional da Serra dos Órgãos é um verdadeiro refúgio de biodiversidade da Mata Atlântica. Com altitudes que variam de 100 a mais de 2.200 metros, o parque abriga uma grande diversidade de habitats, que sustentam centenas de espécies de fauna e flora — muitas delas ameaçadas de extinção ou exclusivas da região.
            </Text>
            <Button to="/biodiversidade">Saiba mais!</Button>
        </Container>
    )
}