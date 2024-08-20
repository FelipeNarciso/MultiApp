import styled from "styled-components";
import { CarouselProvider } from "../services/CarouselContext";
import CarouselPage from "./CarouselPage";
import NavbarPage from "./NavbarPage";
import FooterApp from "../components/FooterApp";
import "../App.css";

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

function PaginaInicial() {
  return (
    <>
      <CarouselProvider>
        <AppContainer>
          <NavbarPage />
          <MainContent>
            <CarouselPage />
            <FooterApp />
          </MainContent>
        </AppContainer>
      </CarouselProvider>
    </>
  );
}
export default PaginaInicial;
