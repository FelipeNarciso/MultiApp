import * as yup from 'yup' // Importa a biblioteca yup para vazer validações do JSON recebido da API


const validacaoTranslatedText = yup.object().shape({ // Define o esquema de validação
    translatedText: yup.string().required() // O translatedText deve ser uma string e é obrigatório 
  });

  export {validacaoTranslatedText} // Exporta o esquema de validação