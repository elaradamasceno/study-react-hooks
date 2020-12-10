import React, {useState, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidationsForm from '../../contexts/ValidationsForm';
import useErrors from '../../hooks/useErrors';

function UserData({submit}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validations = useContext(ValidationsForm);
    const [errors, validateFields, sendForm] = useErrors(validations);
    
    return(
        <form onSubmit={(e)=> {
            e.preventDefault();
            if(sendForm())
                submit({email, password});
        }}>
            <TextField 
                id="email-user" 
                label="E-mail" 
                type="email" 
                variant="outlined" 
                margin="normal" 
                required 
                fullWidth
                value={email}
                name="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />

            <TextField 
                id="password" 
                label="Senha" 
                type="password" 
                variant="outlined" 
                margin="normal" 
                required 
                fullWidth
                value={password}
                name="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                onBlur={validateFields}
                error={errors.password.invalid}
                helperText={errors.password.textHelp}
            />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default UserData;