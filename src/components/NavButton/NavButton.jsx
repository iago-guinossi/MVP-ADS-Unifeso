import styled from "styled-components";
import { useState } from "react";
import { DropDown } from "@/components/Dropdown/Dropdown";
import LetterX from '@/assets/letterx.svg?react'
import Threebars from '@/assets/threebars.svg?react'

const ContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 570px) {
    display: none;
  }
`;

const ContainerButton = styled.div`
    display: flex;
    gap: 20px;
    
`

const ButtonLogin = styled.button`
  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 25px;
  cursor: pointer;
`

const LoginText = styled.span`
  font-size: 18px;
  font-weight:600;
  color: var(--black);
`

const ContainerMobile = styled.div`
  display: none;

  @media (max-width: 570px){
    display: flex;
  }  
`

const Button = styled.button`
  position: relative;
  padding: 10px 20px;
  width:50px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: var(--black);
  z-index: 1;
`;

const StyledThreebars = styled(Threebars)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translate(-50%, -50%) scale(${({ $visible }) => ($visible ? 1 : 0.5)});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  fill: var(--black);
`

const StyledLetterX = styled(LetterX)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translate(-50%, -50%) scale(${({ $visible }) => ($visible ? 1 : 0.5)});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  fill: var(--black);
`

const ContainerSideBar = styled.div`
  width: 180px;
  height: calc(100vh - 120px);
  position: absolute;
  right: 0;
  top: 120px;
  background-color: var(--white);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`

const SideBarButton = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: var(--black);
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  &:hover {
    background-color: var(--green);
  }
`;

export function NavButton({ name, navButtons }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <ContainerDesktop>
        <DropDown name={'Descubra'} navButtons={['Trilhas', 'Cachoeiras', 'Eventos']} />
        <DropDown name={'Sobre'} navButtons={['Biodiversidade', 'Temporada', 'Contato']} />
        <ButtonLogin><LoginText>Login ADM</LoginText></ButtonLogin>
      </ContainerDesktop>
      <ContainerMobile>
        <Button onClick={() => setOpen(!open)}>
          <StyledThreebars $visible={!open} />
          <StyledLetterX $visible={open} />
        </Button>
        <ContainerSideBar $show={open}>
          <SideBarButton>Trilhas</SideBarButton>
          <SideBarButton>Cachoeiras</SideBarButton>
          <SideBarButton>Eventos</SideBarButton>
          <SideBarButton>Biodiversidade</SideBarButton>
          <SideBarButton>Temporada</SideBarButton>
          <SideBarButton>Contato</SideBarButton>
          <SideBarButton>Login ADM</SideBarButton>
        </ContainerSideBar>
      </ContainerMobile>
    </>
  )
}