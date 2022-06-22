import React from 'react';
import useLoginData from '../hooks/useLoginData';
import usemediaQuery from '../hooks/usemediaQuery';
import './index.css';

interface LoginProps{
    
    onSubmit?: (email: string, password: string) => {}
}
const Login: React.FC <LoginProps> = (props) => {
    const{onSubmit} = props;
    
    const shoudHideImage = usemediaQuery();
    console.log({shoudHideImage});

    const {active, errorMessage, onEmailChange, onPasswordChange, submit } = useLoginData({onSubmit});
    return (
        
        <div className = "frame" >
            {!shoudHideImage &&
                <img alt = {"slika"}src = {"https://ichef.bbci.co.uk/news/999/cpsprodpb/1751E/production/_123881559_02.jpg"} />}
            <div className = "form-box">
                <h1>Welcome Back!</h1>
                <label>E-mail</label>
                <input type="text" name = "email" onChange = {onEmailChange} />
                <label>Password</label>
                <input type="password" name = "password" onChange = {onPasswordChange} />
                {errorMessage  && 
                <div style={{color: "red"}}>{errorMessage}</div>
                }
                
                <button className = {`btn ${!active && 'disabled'}`} disabled = {!active} onClick = {submit}>Sign in</button>
            </div>
        </div>

    )
}

export default Login;

