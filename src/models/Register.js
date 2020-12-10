function validateCpf(cpf){
    if(cpf.length !== 11)
        return {invalid: true, textHelp: 'CPF deve conter 11 digitos.'}
    else
        return {invalid: false, textHelp: ''}
}

function validatePassword(password){
    if(password.length < 4 || password.length > 10)
        return {invalid: true, textHelp: 'Senha deve estar entre 4 a 10 caracteres.'}
    else
        return {invalid: false, textHelp: ''}
}

export {validateCpf, validatePassword}