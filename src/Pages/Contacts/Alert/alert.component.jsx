import React, { useState } from 'react';
import { CloseBtn, Alert, Text } from './alert.styles';

//verificare se funziona
export default function CustomAlert(props) {
    const [actived, setActived] = useState(false);
    //console.log('success:', props.Success)
    return (props.Success ?
        (
            <Alert value={actived} flag={props.Success}>
                <CloseBtn onClick={() => {setActived(true);window.location.reload()}}>×</CloseBtn>
                <Text>OPERAZIONE AVVENUTA CON SUCCESSO!</Text>
            </Alert>
        ) : (
            <Alert value={actived} flag={props.Success}>
                <CloseBtn onClick={() => {setActived(true);window.location.reload()}}>×</CloseBtn>
                <Text>OPERAZIONE FALLITA! <br/>
                    Inserire l'e-mail</Text>
            </Alert>)
    );
}