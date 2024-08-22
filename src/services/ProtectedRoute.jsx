import { Navigate } from 'react-router-dom'; // Importa o componente Navigate

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwt') // Obtém o token JWT do localStorage

  if (!token) {
    // Redirecionar para a página de login ou outra rota caso não tenha o token
    return <Navigate to="/" />
  }

  return children // Renderiza o componente protegido se o token existir
};

export default ProtectedRoute


