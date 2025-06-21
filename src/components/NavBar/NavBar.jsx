import styled from "styled-components";
import logo from '@/assets/logo.jpeg'
import { NavButton } from "../NavButton";

const Container = styled.div`
    height: 120px;
    width: 100%;
    background-color: var(--white);
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

const Logo = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
`

export function NavBar() {

  return (
    <Container>
      <Logo src={logo} alt='Logo Teré Verde'/>
      <NavButton/>
    </Container>

  )
}