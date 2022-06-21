import React from 'react';
import useLoginData from '../hooks/useLoginData';
import './index.css';

interface LoginProps{
    name?: string;
    password?: string;
}
const Login: React.FC <LoginProps> = (props) => {
    const{name, password} = props;
    const {active, errorMessage, fillRightInput, submit } = useLoginData();
    return (
        
        <div className = "frame" >
            <img alt = {"slika"}src = {"https://ichef.bbci.co.uk/news/999/cpsprodpb/1751E/production/_123881559_02.jpg"} />
            <div className = "form-box">
                <h1>Welcome Back!</h1>
                <label>E-mail</label>
                <input type="text" name = "email" onChange = {fillRightInput} />
                <label>Password</label>
                <input type="password" name = "password" onChange = {fillRightInput} />
                {errorMessage === true && 
                <div style={{color: "red"}}>Eroor check your email and password</div>
                }
                
                <button className="btn" disabled = {active} onClick = {submit}>Sign in</button>
            </div>
        </div>
    )
}

export default Login;

