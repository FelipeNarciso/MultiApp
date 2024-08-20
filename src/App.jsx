// Importa hooks e componentes do React e bibliotecas externas.
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./components/Login";
import PaginaInicial from "./pages/PaginaInicial";


// Define o componente principal do aplicativo.
const App = () => {

  // Renderiza o componente principal.
  return (
    <>
        <Routes> 
          <Route path="/" element={<Login/>}></Route>
          <Route path="/PaginaInicial" element={<PaginaInicial/>}></Route>
        </Routes>
    </>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
