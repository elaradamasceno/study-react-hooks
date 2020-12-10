import React, {useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';
import ValidationsForm from '../../contexts/ValidationsForm';
import useErrors from '../../hooks/useErrors';

function PersonalData({submit}){
    const [userName, setUserName] = useState('');
    const [surname, setSurname] = useState('');
    const [cpf, setCpf] = useState('');
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const validations = useContext(ValidationsForm);
    const [errors, validateFields, sendForm] = useErrors(validations)

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if(sendForm())
                submit({ userName: userName, surname: surname, cpf: cpf, promotions: promotions, news: news});
        }}>
            <TextField 
                id="name" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                required
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            
            <TextField 
                id="surname" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                required
                value={surname}
                onChange={(e) => {
                    setSurname(e.target.value);
                }}
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                required
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value); 
                }}
                error={errors.cpf.invalid}
                helperText={errors.cpf.textHelp}
                name="cpf"
                onBlur={validateFields}
            />
        
            <FormControlLabel
                label="Promoções"
                control={
                    <Switch name="promotions" color="primary" checked={promotions}
                        onChange={(e) => {
                            setPromotions(e.target.checked)
                        }}
                    />
                }>
            </FormControlLabel>

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch name="news" color="primary" checked={news}
                        onChange={(e) => {
                            setNews(e.target.checked)
                        }} 
                    />
                }>
            </FormControlLabel>

            <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
        </form>
    )
}

export default PersonalData;
