// Importa hooks e componentes do React e bibliotecas externas.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" // Importa os componentes para roteamento 
import { lazy, Suspense } from "react" // Importa os hooks para carregamento dinâmico
import Login from "./components/Login" // Importa o componente Login
import ProtectedRoute from "./services/ProtectedRoute" // Importa a rota protegida

// Define o componente principal do aplicativo.
const App = () => {
  const PaginaInicial = lazy(() => import("./pages/PaginaInicial"))  // Utiliza o Lazy Loading para carregamento dinâmico do componente PaginaInicial

  // Renderiza o componente principal.
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}> 
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/PaginaInicial" element={ <ProtectedRoute> <PaginaInicial /> </ProtectedRoute> }/>
        </Routes>
      </Suspense>
    </>
  );
};

export default App