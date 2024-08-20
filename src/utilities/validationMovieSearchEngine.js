import * as yup from 'yup' // Importa a biblioteca yup para vazer validações do JSON recebido da API

const validacaoMovies = yup.object().shape({ // Define o esquema de validação
  id: yup.number().required(), // O id deve ser um número e é obrigatório
  title: yup.string().required(), // O title deve ser uma string e é obrigatório
  release_date: yup.string().required(), // O release_date deve ser uma string e é obrigatório 
  poster_path: yup.string().nullable(), // O poster_path deve ser uma string ou nulo
});

const validacaoListaMovies = yup.array().of(validacaoMovies) // Define a validação para um array

export { validacaoMovies, validacaoListaMovies } // Exportação dos esquemas de validação
