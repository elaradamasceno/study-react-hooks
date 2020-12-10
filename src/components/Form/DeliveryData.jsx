import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';

function DeliveryData({submit}){
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            submit({
                cep, address, number, state, city
            })
        }}>
            <TextField 
                id="cep" 
                label="CEP" 
                type="number" 
                variant="outlined" 
                margin="normal"
                value={cep}
                onChange={(e) => {
                    setCep(e.target.value)
                }}
            />
            
            <TextField 
                id="address" 
                label="Endereço" 
                type="text" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}
            />

            <TextField 
                id="number" 
                label="Número" 
                type="number" 
                variant="outlined" 
                margin="normal"
                value={number}
                onChange={(e) =>{
                    setNumber(e.target.value);
                }}
            />

            <TextField 
                id="state" 
                label="Estado" 
                type="text" 
                variant="outlined" 
                margin="normal"
                value={state}
                onChange={(e) => {
                    setState(e.target.value);
                }}
            />

            <TextField 
                id="city" 
                label="Cidade" 
                type="text" 
                variant="outlined" 
                margin="normal" 
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)
                }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DeliveryData;