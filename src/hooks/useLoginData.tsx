import { useState } from "react";
import { checkEmailAndPassword } from "../helpers/validation";
 


const useLoginData = ({onSubmit}: {onSubmit?:(email: string, password: string) => {}}) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

        const validate = (emailValue: string , passwordValue: string) => {
            let report =checkEmailAndPassword({email: passwordValue, password: passwordValue});
            setErrorMessage(report)
        }
    
    const [errorMessage, setErrorMessage] = useState<string >("");
    

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => { // any type
        const {value} = event.target;
         
        setEmail(value);
        validate(value, password);

    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { // any type
        const {value} = event.target; 
        setPassword(value);
        validate(email, value);
    }

    const submit = () => {

        let report = checkEmailAndPassword({email, password});
        if(report) setErrorMessage(report)
        else if (onSubmit) {
            onSubmit(email, password)
        }
        console.log(errorMessage);
        
        // funkcija submit koja prosledjuje data {email, password} na validaciju
        // validacija ce sadrzati dosta kombinacija recimo polje ne smete stavljati prazno, 
        // koje sve karaktere lozinka mora da sadrzi   
    }
    const active = email.length && password.length;
    return {active, errorMessage, onEmailChange, onPasswordChange, submit};
}

export default useLoginData;


