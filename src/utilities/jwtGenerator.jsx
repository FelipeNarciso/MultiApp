import { SignJWT, jwtVerify } from 'jose' // Importa apenas as funções de criar e verificar o JWT da biblioteca 'jose'

// Defina a chave secreta codificada em base64
const secretKey = new TextEncoder().encode('0123456789')

// Função para criar um JWT
export async function createJWT(payload) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' }) // Define o header do token
    .setIssuedAt() // Define o tempo de emissão como o tempo atual
    .setExpirationTime('5m') // Define o tempo de expiração
    .sign(secretKey) // Assina o JWT com a chave secreta

    // Salva o JWT no localStorage
    localStorage.setItem('jwt', jwt);

  return jwt; // Retorna o JWT
}

// Função para verificar um JWT
export async function verifyJWT(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey) // Verifica a autenticidade do token
    return payload // Retorna o payload do token se a verificação for bem-sucedida
  } catch (error) {
    console.error(error) // Exibe o erro no console se a verificação falhar
  }
}
