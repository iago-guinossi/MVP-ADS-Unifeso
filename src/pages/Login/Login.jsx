import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-height: calc(100vh - 390px)
`;

const Input = styled.input`
  padding: 8px;
  border: 2px solid ${({ erro }) => (erro ? 'red' : '#ccc')};
  border-radius: 4px;
  font-size: 16px;
  color: var(--black);
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--green);
  color: var(--black);
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--active-green);
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

export function Login(){
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    if (usuario === 'adm' && senha === 'adm') {
      setErro(false);
      navigate('/trilhas');
    } else {
      setErro(true);
    }
  };

  return (
    <>
    <NavBar/>
    <Container>
      <Input
        type="text"
        placeholder="Usuário"
        value={usuario}
        erro={erro}
        onChange={(e) => {
            setUsuario(e.target.value)
            setErro(false)
        }}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        erro={erro}
        onChange={(e) => {
            setSenha(e.target.value)
            setErro(false)
        }}
      />
      {erro && <Error>Usuário ou senha incorretos.</Error>}
      <Button onClick={handleLogin}>Entrar</Button>
    </Container>
    <Footer/>
    </>
  );
};