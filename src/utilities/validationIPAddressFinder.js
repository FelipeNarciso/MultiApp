import * as yup from 'yup' // Importa a biblioteca yup para vazer validações do JSON recebido da API

const validacaoIP = yup.object().shape({ // Define o esquema de validação
    ip: yup.string().required(), // O id deve ser uma string e é obrigatório
    city: yup.string().required(), // O city deve ser uma string e é obrigatório
    region: yup.string().required(), // O region deve ser uma string e é obrigatório
    country: yup.string().required(), // O country deve ser uma string e é obrigatório
    org: yup.string().required(), // O org deve ser uma string e é obrigatório
  });

  export {validacaoIP} // Exporta o esquema de validação