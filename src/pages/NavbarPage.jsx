import styled from "styled-components"; // Importa o styled-componentes
import {FaQrcode, FaSearch, FaTasks, FaRegQuestionCircle, FaGlobeAmericas, FaNetworkWired, FaBars} from "react-icons/fa"; // Importa os icones para cada link
import { useNavigate } from "react-router-dom"; // Importa o hook para fazer navegações entre as rotas
import { useState } from "react"; // Importa o hook useState do React 
import { useCarousel } from '../services/CarouselContext'; // // Importa o hook personalizado para acessar o os estados do Carrosel

// Estiliza a barra de navegação.
const NavBar = styled.div`
  width: 240px;
  position: relative;
  z-index: 999;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled.div`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
    cursor: pointer;
  }
`;

  // Estiliza o botão de alternância da barra de navegação.
  const NavBarToggle = styled.div`
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1000;

    @media (max-width: 768px) {
      display: block;
    }
  `;

  // Estiliza o botão do menu hambúger
  const BtnToggle = styled(FaBars)`
      transform: scale(2.0);
 `;

 // Estiliza o botão de logout
 const BtnLogout = styled.button`
  margin-top: 20px;
  border: none;
  background: none;
  color: white;

  &:hover{
    cursor: pointer;
  }
 `


function NavbarPage() {
  const navigate = useNavigate(); // Usa o hook useNavigate do React Router para obter a função navigate.
  const [isNavBarOpen, setIsNavBarOpen] = useState(false); // Usa o hook useState para criar um estado local
  const { carouselIndex, setCarouselIndex, currentComponent, setCurrentComponent } = useCarousel(); // Usa o hook personalizado useCarousel para acessar e controlar o estado do carrossel

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    localStorage.removeItem("jwt")
    navigate("/");
  };

  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

    // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
    const handleAccess = (index, component) => {
      setCarouselIndex(index);
      setCurrentComponent(component);
    };
  
  return (
    <>
      <NavBarToggle onClick={toggleNavBar}>
        <BtnToggle></BtnToggle>
      </NavBarToggle>
      <NavBar isOpen={isNavBarOpen}>
        <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
          <FaGlobeAmericas />
          Translator
        </StyledLink>
        <BtnLogout onClick={handleLogout}>Logout</BtnLogout>
      </NavBar>
    </>
  );
}
export default NavbarPage;
