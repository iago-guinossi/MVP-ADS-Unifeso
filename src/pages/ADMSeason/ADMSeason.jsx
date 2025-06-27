import { useState } from "react";
import { Footer } from "@/components/Footer";
import { ADMNavBar } from "@/components/ADMNavBar";
import styled from "styled-components";
import defaultImg from "/temporada/temporada.jpeg";

const Container = styled.div`
  width: 100%;
  padding: 54px 16px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--green);
`;

const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 16px;
  color: var(--black);
  margin-bottom: 40px;
`;

const Text = styled.span`
  font-size: 18px;
  line-height: calc(18px * 1.5);
  max-width: 1150px;
  color: var(--black);
  margin-bottom: 18px;
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const ButtonBar = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background: var(--white);
  color: var(--black);
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const SaveButton = styled(EditButton)`
  background: var(--dark-green);
    color: var(--white);
`;

const CancelButton = styled(EditButton)`
  background: red;
    color: var(--white);
`;

const InputTitle = styled.input`
  font-size: 38px;
  width: 80%;
  margin-bottom: 40px;
  text-align: center;
`;

const Textarea = styled.textarea`
  color: var(--black);
  background-color: var(--white);
  font-size: 18px;
  line-height: calc(18px * 1.5);
  max-width: 1150px;
  width: 80%;
  margin-bottom: 18px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--dark-white);
`;

const Input = styled.input`
    margin-bottom: 10px;
`

export function ADMSeason() {
    // estado real
    const [state, setState] = useState({
        title: "Temporada Atual",
        imgSrc: defaultImg,
        texts: `ATM PARNASO 2025 Domingo, 18 de Maio
Prepare-se para um dia especial dedicado ao esporte, à natureza e à cultura do montanhismo e da escalada! No dia 18 de maio, o Parque Nacional da Serra dos Órgãos (PARNASO) recebe mais uma edição da Abertura de Alta Temporada de Montanhismo (ATM), reunindo corredores, caminhantes, montanhistas, escaladores, voluntários, ambientalistas e o público em geral em uma celebração que já se tornou tradição.

É um convite para reencontrar amigos, trocar experiências e contribuir ativamente para a preservação do nosso patrimônio natural e esportivo. Traga seu espírito coletivo e venha viver a montanha com a gente!

Fique ligado na programação completa e nas atualizações pelas redes do PARNASO e dos coletivos parceiros.`,

    });

    const [editState, setEditState] = useState(state);
    const [isEditing, setEditing] = useState(false);

    const startEdit = () => {
        setEditState(state);
        setEditing(true);
    };

    const cancelEdit = () => {
        setEditing(false);
    };

    const saveEdit = () => {
        alert("Dados atualizados!");
        window.location.reload();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const blobUrl = URL.createObjectURL(file);
        setEditState(s => ({ ...s, imgSrc: blobUrl }));
    };

    const handleTextChange = (e) => {
        setEditState(s => ({ ...s, text: e.target.value }));
    };



    return (
        <>
            <ADMNavBar />
            <Container>
                <Title>Edição de Temporada</Title>
                {!isEditing ? (
                    <ButtonBar>
                        <EditButton onClick={startEdit}>Editar</EditButton>
                    </ButtonBar>
                ) : (
                    <ButtonBar>
                        <SaveButton onClick={saveEdit}>Salvar</SaveButton>
                        <CancelButton onClick={cancelEdit}>Cancelar</CancelButton>
                    </ButtonBar>
                )}

                {isEditing ? (
                    <>
                        <Image src={editState.imgSrc} alt="preview" />
                        <Input type="file" accept="image/*" onChange={handleFileChange} />
                    </>
                ) : (
                    <Image src={state.imgSrc} alt="Banner da temporada atual" />
                )}

                {(isEditing ? (
                    <Textarea
                        rows={10}
                        value={editState.texts}
                        onChange={handleTextChange}
                    />
                ) : (
                    <Text>{state.texts}</Text>
                )
                )}
            </Container>
            <Footer />
        </>
    );
}