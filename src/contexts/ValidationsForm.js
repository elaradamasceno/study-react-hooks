import React from 'react';

const ValidationsForm = React.createContext({
    cpf: notValidation, 
    password: notValidation
});

function notValidation(dados){
    console.log(dados);
    return {invalid: false, text: ""}
}

export default ValidationsForm;