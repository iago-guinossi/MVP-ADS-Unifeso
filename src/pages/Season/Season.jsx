import { Footer } from "@/components/Footer/Footer"
import { NavBar } from "@/components/NavBar/NavBar"
import styled from "styled-components"
import seasonImg from "/temporada/temporada.jpeg"

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
    font-size: 38px;
    margin: 0 auto 16px;
    color: var(--black);
    margin-bottom: 40px;
`

const Text = styled.span`
    font-size: 18px;
    line-height: calc(18px * 1.5);
    max-width: 1150px;
    color: var(--black);
    margin-bottom: 18px;
`

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 18px;
`;

export function Season() {
    return (
        <>
            <NavBar />
            <Container>
                <Title>Temporada Atual</Title>
                <Image src={seasonImg} alt="Banner da temporada atual" />
                <Text>
                    ATM PARNASO 2025 Domingo, 18 de Maio
                    Prepare-se para um dia especial dedicado ao esporte, à natureza e à cultura do montanhismo e da esclada! No dia 18 de maio, o Parque Nacional da Serra dos Órgãos (PARNASO) recebe mais uma edição da Abertura de Alta Temporada de Montanhismo (ATM), reunindo corredores, caminhantes, montanhistas, escaladores, voluntários, ambientalistas e o público em geral em uma celebração que já se tornou tradição.
                </Text>
                <Text>
                    É um convite para reencontrar amigos, trocar experiências e contribuir ativamente para a preservação do nosso patrimônio natural e esportivo. Traga seu espírito coletivo e venha viver a montanha com a gente!
                </Text>
                <Text>
                    Fique ligado na programação completa e nas atualizações pelas redes do PARNASO e dos coletivos parceiros.
                </Text>
            </Container>
            <Footer />
        </>
    )
}