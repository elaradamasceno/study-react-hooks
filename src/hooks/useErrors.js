import React, {useState} from 'react';

function useErrors(validations){
    const initialState = createInitialState(validations);
    const [errors, setErrors] = useState(initialState);

    function validateFields(e){
        const {name, value} = e.target;
        const newState = {...errors}
        newState[name] = validations[name](value);
        setErrors(newState)
    }

    function sendForm(){
        for(let field in errors ){
            if(errors[field].invalid)
                return false
        }
        return true
    }

    return [errors, validateFields, sendForm]
}

function createInitialState(validations){
    const initialState = {};

    for(let field in validations)
        initialState[field] = {invalid: false, textHelp: ''} 

    return initialState;
}

export default useErrors;