import styled from "styled-components";
import { useCarousel } from '../services/CarouselContext';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FaArrowLeft} from "react-icons/fa"
import QRCodeGenerator from "../components/QRCodeGenarator";
import IPAddressFinder from "../components/IPAddressFinder";
import MovieSearchEngine from "../components/MovieSearchEngine";
import TodoApp from "../components/TodoApp";
import QuizApp from "../components/QuizApp";
import LanguageTranslator from "../components/LanguageTranslator";

// Estiliza o contêiner do carrossel.
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;

// Estiliza o carrossel personalizado.
const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

// Estiliza os itens individuais do carrossel.
const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

function CarouselPage() {
  const { carouselIndex, setCarouselIndex, currentComponent, setCurrentComponent } = useCarousel();

  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
   const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

    // Função para retornar ao carrossel principal.
    const handleReturn = () => {
        setCurrentComponent(null);
      };

  return (
    <>
      {currentComponent ? (
        <>
          {renderComponent()}
          <ReturnButton onClick={handleReturn}>
            <FaArrowLeft /> Return
          </ReturnButton>
        </>
      ) : (
        <CarouselContainer>
          <CustomCarousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showThumbs={false}
            selectedItem={carouselIndex}
            onChange={(index) => setCarouselIndex(index)}
          >
            <CarouselItem>
              <h2>QR Code Generator</h2>
              <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>IP Address Finder</h2>
              <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Movie Search Engine</h2>
              <button onClick={() => handleAccess(2, "MovieSearchEngine")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Todo App</h2>
              <button onClick={() => handleAccess(3, "TodoApp")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Quiz App</h2>
              <button onClick={() => handleAccess(4, "QuizApp")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Language Translator</h2>
              <button onClick={() => handleAccess(5, "LanguageTranslator")}>
                Acessar
              </button>
            </CarouselItem>
          </CustomCarousel>
        </CarouselContainer>
      )}
    </>
  );
}
export default CarouselPage;
