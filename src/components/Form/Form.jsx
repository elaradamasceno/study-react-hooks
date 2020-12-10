import React, {Fragment, useEffect, useState} from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';

import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function Form({submit}){
    const [currentStep, setStep] = useState(0);
    const [allData, setAllData] = useState({});

    useEffect(() => {
        if(currentStep === forms.length -1)
            submit(allData);
    })

    const forms = [
        <UserData submit={getData}/>,
        <PersonalData submit={getData} />,
        <DeliveryData submit={getData}/>,
        <Typography variant="h5">Obrigado pelo Cadastro =)</Typography>
    ];

    function getData(data){
        // ... pega cada atributo e adiciona no objeto que esta sendo criado
        // ...data (esta sendo feito uma concatenação com os dados recebidos)
        setAllData({...allData, ...data});
        nextStep();
    }

    function nextStep(){
        setStep(currentStep+1);
    }
    
    return (
        <Fragment>
            <Stepper activeStep={currentStep}>
                <Step> <StepLabel>Dados do Login</StepLabel> </Step>
                <Step> <StepLabel>Dados Pessoais</StepLabel> </Step>
                <Step> <StepLabel>Dados de Entrega</StepLabel> </Step>
                <Step> <StepLabel>Finalização</StepLabel> </Step>
            </Stepper>
            
            {forms[currentStep]}
        </Fragment>
    )
}

export default Form;