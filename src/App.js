import React from 'react';
import Form from './components/Form/Form';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

import {validateCpf, validatePassword} from './models/Register';
import ValidationsForm from './contexts/ValidationsForm';
function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center" component="h1" >Formulário de Cadastro</Typography>
            <ValidationsForm.Provider value={{cpf: validateCpf, password: validatePassword}}>
                <Form submit={submitForm}></Form>
            </ValidationsForm.Provider>
        </Container>
    );
}

function submitForm(data){
    console.log(data)
}

export default App;
