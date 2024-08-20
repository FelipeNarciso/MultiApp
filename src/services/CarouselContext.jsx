// Cria um contexto para acessar os hooks através da NavbarPage
import React, { createContext, useState, useContext } from 'react';

const CarouselContext = createContext(); // Hook personalizado para acessar o contexto

export const CarouselProvider = ({ children }) => {
  const [carouselIndex, setCarouselIndex] = useState(0); // Altera o índicie do carrossel
  const [currentComponent, setCurrentComponent] = useState(null); // Componente atual

  return (
    <CarouselContext.Provider value={{ carouselIndex, setCarouselIndex, currentComponent, setCurrentComponent }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => useContext(CarouselContext);
