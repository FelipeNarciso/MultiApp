// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from "react";
// Importa a biblioteca axios para fazer requisições HTTP.
import axios from "axios";
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from "styled-components";

// Cria um componente estilizado chamado Container usando styled-components.
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas e sombras.
const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: #fff; // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil ao redor do componente.
  max-width: 500px; // Define a largura máxima como 500px.
  margin: 50px auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado Input usando styled-components.
// Esse componente estiliza um <input> com padding, borda, bordas arredondadas, e sombra interna.
const Input = styled.input`
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do input.
  padding: 12px; // Adiciona padding de 12px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 100%; // Define a largura como 100% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus {
    // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

// Cria um componente estilizado chamado Button usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas e efeitos de transição.
const Button = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do botão.

  &:hover {
    // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
  }
`;

// Cria um componente estilizado chamado TaskList usando styled-components.
// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
const TaskList = styled.ul`
  list-style-type: none; // Remove os pontos de lista padrão.
  padding: 0; // Remove o padding padrão.
  width: 100%; // Define a largura como 100% do contêiner pai.
`;

// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
const TaskItem = styled.li`
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  padding: 10px; // Adiciona padding de 10px dentro do item.
  margin-bottom: 10px; // Adiciona uma margem de 10px abaixo do item.
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do item.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  display: flex; // Define o layout como flexbox.
  justify-content: space-between; // Distribui o espaço entre os itens do item.
  align-items: center; // Alinha os itens no centro verticalmente.

  &:hover {
    // Aplica estilos ao item quando o cursor está sobre ele.
    background-color: #f1f1f1; // Muda a cor de fundo para um tom ligeiramente mais escuro de cinza.
  }

  button {
    // Estiliza os botões dentro do TaskItem.
    margin-left: 10px; // Adiciona uma margem de 10px à esquerda do botão.
    background: transparent; // Define o fundo como transparente.
    border: none; // Remove a borda padrão do botão.
    color: red; // Define a cor do texto como vermelho.
    cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
    font-size: 16px; // Define o tamanho da fonte como 16px.

    &:hover {
      // Aplica estilos ao botão quando o cursor está sobre ele.
      color: darkred; // Muda a cor do texto para um tom mais escuro de vermelho.
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
const EditInput = styled.input`
  margin-left: 10px; // Adiciona uma margem de 10px à esquerda do input.
  padding: 6px; // Adiciona padding de 6px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 60%; // Define a largura como 60% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 14px; // Define o tamanho da fonte como 14px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus {
    // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

const List = styled.li`
  // Aplica estilo para cada item da lista
  padding: 10px; // Adiciona um espaçamento entre os elementos
`;

const BtnDeletar = styled.button`
// Aplica estilo para o botão de deletar
  scale: 0.8; // Diminue a escala do botão
  background-color: red; // Define a cor de fundo como vermelho
  transition: 0.5s ease; // Adiciona o tempo para uma transição 
  &:hover{
    background-color: #c02232; // Muda a cor de fundo quando passar o mouse
  }
`;

const BtnAlterar = styled.button`
// Aplica estilo para o botão de Alterar
  scale: 0.8; // Diminue a escala do botão
  transition: 0.5s ease; // Adiciona o tempo para uma transição
`;

// Define o componente funcional TodoApp.
const TodoApp = () => {
  const [task, setTask] = useState(""); // Estado para lidar com cada task
  const [count, setCount] = useState(0); // Estado para poder limitar um máximo de 6 tarefas 
  const [tasks, setTasks] = useState([]); // Estado para manipular o array com todas as tasks
  const [erro, setErro] = useState('') // Estado para manipular os erros para o usuário

  const addTask = () => {
    setErro('') // Limpa o campo de erro após cada tentativa de adicionar 

    if (task == ""){
      setErro('Preencha o campo antes!') // Mostra um erro ao usuário se tentar adicionar algo com o campo vazio
      return // Retorna a função 
    } 
    if(count == 6){
      setErro('Só é possivel adicionar no máximo 6 tarefas!') // Mostra um erro ao usuário se ele atingir o limite de tarefas
      return // Retorna a função
    }
    const newTasks = [...tasks, task] // Adiciona a nova tarefa ao array de tarefas
    localStorage.setItem("tasks", JSON.stringify(newTasks)) // Salva o array atualizado no localStorage
    setTask("") // Limpa o campo de entrada
    setTasks(newTasks) // Atualiza o estado com a nova lista de tarefas
    setCount(count + 1) // Atualiza o contador 
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []; // Obtém tarefas armazenadas
    setTasks(storedTasks) // Atualiza o estado com as tarefas recuperadas
  }, [count]);

  const deleteTask = (index) => {
    const array = [...tasks] // Obtém todas as terefas e armazena no array

    array.splice(index, 1) // Remove a tarefa com base no índex recebido como parâmetro da função

    localStorage.setItem("tasks", JSON.stringify(array)) // Atualiza o localStorage
    setCount(count - 1); // Decrementa o contador
    setErro('') // Limpa o aviso de erro
  }

  const updateTask = (index) => {
      deleteTask(index) // Chama a função deleteTask para tirar a tarefa do localStorage
      const array = [...tasks] // Obtém todas as terefas e armazena no array
      setTask(array[index]) // Atualiza o estado para deixar a task escolhida como value do input
  }

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Atualiza o estado para a frase escrita no campo 
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button> {/* Botão para chamar a função addTask */}
      {erro}
      {tasks && ( 
        <ul>
        {tasks.map((item, index) => (
          <List key={index}>{item} 
            <BtnAlterar onClick={() => {updateTask(index)}}>Alterar</BtnAlterar> {/* Botão para chamar a função updateTaks */}
            <BtnDeletar onClick={() => {deleteTask(index)}}>Deletar</BtnDeletar> {/* Botão para chamar a função deleteTask */}
          </List>
        ))}
      </ul>
      )}
    </Container>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;
