import { useState, useEffect } from "react";
import styled from "styled-components";
import LetterX from '@/assets/letterx.svg?react';
import { Carousel } from "../Carousel/Carousel";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Container = styled.div`
  background: var(--white);
  color: var(--black);
  border-radius: 16px;
  max-width: 800px;
  width: 90%;
  padding: 24px;
  position: relative;
  max-height: 90dvh;
  text-align: center;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 10px;
  height: 10px;
  right: 15px;
  top: -10px;
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: inherit;
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
`;

const Info = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  text-align:start;
  gap: 16px;
`;

const SaveButton = styled.button`
  padding: 12px 24px;
  background: var(--green);
  color: var(--black);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  padding: 12px 24px;
  background: #ad0a0a;
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const AddImgButton = styled.button`
  margin-top: 12px;
  background: var(--green);
  color: var(--black);
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const RemoveImgButton = styled.button`
  margin-left: 8px;
  background: transparent;
  border: none;
  color: red;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const StyledLetterX = styled(LetterX)`
  width: 10px;
  height: 10px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: bold;
`

const ImageSelector = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
`

const PreviewImage = styled.img`
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 8px;
`

const LabelInputImage = styled.label`
    flex-grow: 1;
`

export function ModalEdit({ card, onClose, isEvent = false }) {
    const [data, setData] = useState(card);

    useEffect(() => setData(card), [card]);

    const handleChange = (key) => (e) =>
        setData({ ...data, [key]: e.target.value });

    const handleSave = () => {
        alert("Card atualizado!");
        window.location.reload();
    };

    const handleDelete = () => {
        alert("Card deletado!");
        window.location.reload();
    };

    const handleFileChange = idx => e => {
        const file = e.target.files[0];
        if (!file) return;
        const blobUrl = URL.createObjectURL(file);
        setData(d => ({
            ...d,
            images: d.images.map((img, i) =>
                i === idx
                    ? { src: blobUrl, alt: d.name, file }
                    : img
            ),
        }));
    };

    const handleRemoveImage = idx => () => {
        setData(d => ({
            ...d,
            images: d.images.filter((_, i) => i !== idx),
        }));
    };

    const handleAddImage = () => {
        setData(d => ({
            ...d,
            images: [...d.images, { src: "", alt: d.name }],
        }));
    };

    return (
        <ModalOverlay>
            <Container onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <StyledLetterX width={24} height={24} />
                </CloseButton>

                {!isEvent ? (
                    <Carousel images={data.images} />
                ) : (
                    <Image src={data.images[0].src} alt={data.images[0].alt} />
                )}

                <Info>
                    <Text>Nome:</Text>
                    <input type="text" value={data.name} onChange={handleChange("name")} placeholder="Nome do card" />
                    <Text>Localização:</Text>
                    <input type="text" value={data.location} onChange={handleChange("location")} placeholder="Localização" />

                    {data.distance != null && (
                        <>
                            <Text>Distancia:</Text>
                            <input type="text" value={data.distance} onChange={handleChange("distance")} placeholder="Distância" />
                        </>
                    )}

                    <Text>Resumo:</Text>
                    <textarea value={data.summary} onChange={handleChange("summary")} placeholder="Resumo" rows={4}
                    />

                    {isEvent && (
                        <>
                            <Text>Data:</Text>
                            <input type="text" value={data.date} onChange={handleChange("date")} placeholder="Data" />
                        </>
                    )}

                    {!isEvent && (
                        <>
                            <Text>Link do Google Maps:</Text>
                            <input value={data.map} onChange={handleChange("date")}
                            />
                        </>
                    )}

                    <Text>Imagens:</Text>
                    {!isEvent &&
                        data.images.map((img, idx) => {
                            const canRemove = data.images.length > 1;
                            return (
                                <ImageSelector key={idx}>
                                    {img.src && (
                                        <PreviewImage src={img.src} alt={img.alt} />
                                    )}
                                    <LabelInputImage>
                                        <input type="file" accept="image/*" onChange={handleFileChange(idx)}

                                        />
                                    </LabelInputImage>
                                    <RemoveImgButton type="button" disabled={!canRemove} onClick={canRemove ? handleRemoveImage(idx) : undefined} title={canRemove ? "Remover esta imagem" : "O card precisa ter ao menos uma imagem"} >
                                        ✕
                                    </RemoveImgButton>
                                </ImageSelector>
                            );
                        })}
                    {isEvent && (
                        <ImageSelector>
                            {data.images[0].src && (
                                <PreviewImage src={data.images[0].src} alt={data.images[0].alt} />
                            )}
                            <LabelInputImage>
                                <input type="file" accept="image/*" onChange={handleFileChange(0)}

                                />
                            </LabelInputImage>
                        </ImageSelector>
                    )}
                    {!isEvent && (
                        <AddImgButton type="button" onClick={handleAddImage}>
                            + Adicionar imagem
                        </AddImgButton>
                    )}

                    <SaveButton onClick={handleSave}>Salvar alterações</SaveButton>
                    <DeleteButton onClick={handleDelete}>Deletar Card</DeleteButton>
                </Info>
            </Container>
        </ModalOverlay>
    );
}