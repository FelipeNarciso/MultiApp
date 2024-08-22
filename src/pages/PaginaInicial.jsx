import styled from "styled-components"; // Importa o styled-componentes
import { CarouselProvider } from "../services/CarouselContext"; // Importa o provedor no contexto criado
import { useNavigate } from "react-router-dom"; // Importa o hook para fazer navegações entre as rotas
import { useEffect, useState } from "react"; // Importa o useState e o useEffect do React
import CarouselPage from "./CarouselPage"; // Importa a pagina CarroselPage
import NavbarPage from "./NavbarPage"; // Importa a pagina NavbarPage
import FooterApp from "../components/FooterApp"; // Importa o componente FooterApp
import "../App.css"; // Importa o arquivo css padrão
import { verifyJWT } from "../utilities/jwtGenerator"; // Importa a função para verificar o JWT

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

  const [isTokenValid, setIsTokenValid] = useState(true); // Cria um estado para controlar se o token ainda não expirou
  const navigate = useNavigate() // Define o hook useNavigate

  useEffect(() => {
    const interval = setInterval(async () => { // Define um intervalo que verifica se o token é valido a cada 30s
      const token = localStorage.getItem('jwt'); // Obtém o JWT do localStorage
      if (token) {
        const payload = await verifyJWT(token); // Verifica a validade do token
        if (!payload) {
          setIsTokenValid(false); // Se o token não for válido define o estado como false
        }
      } else {
        setIsTokenValid(false); // Define o estado como false se não tiver nenhum token no localStorage
      }
    }, 30000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  if (!isTokenValid) {
    // Se o token não for válido, redireciona para a página inicial
    alert('Seu token de sessão expirou! Faça login novamente.') // Exibe um alert para o usuário que ele deverá fazer o login novamente para gerar um novo token
    localStorage.clear() // Limpa o localStorage
    navigate('/') // Navega o usuário para a página de login
    return null; // Interrompe a renderização do componente 
  }
  
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
