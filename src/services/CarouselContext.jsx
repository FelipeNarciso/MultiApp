// Cria um contexto para acessar os hooks através da NavbarPage
import React, { createContext, useState, useContext } from 'react';

const CarouselContext = createContext(); // Hook personalizado para acessar o contexto

export const CarouselProvider = ({ children }) => { // Cria o Provedor
  const [carouselIndex, setCarouselIndex] = useState(0); // Altera o índicie do carrossel
  const [currentComponent, setCurrentComponent] = useState(null); // Componente atual

  return ( // Provedor do contexto que disponibiliza o estado do carrossel e funções para alterá-lo aos componentes filhos
    <CarouselContext.Provider value={{ carouselIndex, setCarouselIndex, currentComponent, setCurrentComponent }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => useContext(CarouselContext); // Hook personalizado para acessar o contexto do carrossel em outros componentes
