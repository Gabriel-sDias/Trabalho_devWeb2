import { DashBoardBody, TextButton, TextButtonText } from "./DashBoardStyled";
import { useNavigate } from "react-router-dom";
import { House, UserCirclePlus, Books } from "@phosphor-icons/react";

export function DashBoard() {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleYourChanel() {
    navigate("/yourchanel");
  }
  function handleMotivation() {
    navigate("/motivation");
  }

  return (
    <DashBoardBody>
      <TextButton onClick={handleHome}>
        <House size={32} color="#fffafa" />
        <TextButtonText>Inicio</TextButtonText>
      </TextButton>
      <TextButton onClick={handleYourChanel}>
        <UserCirclePlus size={32} color="#fffafa" />
        <TextButtonText>Seu canal</TextButtonText>
      </TextButton>
      <TextButton onClick={handleMotivation}>
        <Books size={32} color="#fffafa" />
        <TextButtonText>Motivação</TextButtonText>
      </TextButton>
    </DashBoardBody>
  );
}
