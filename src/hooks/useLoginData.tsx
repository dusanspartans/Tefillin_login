import { useState } from "react";
import { checkEmailAndPassword } from "../helpers/validation";
/*interface LoginData {
    email: string;
    password: string;
}*/ 


const useLoginData = () => {
    const [data, setUserData] = useState({email: "", password: ""}); // <LoginData>
    const [active, setActive] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const checkButtonStatus = (value: string) => {
        value.length > 0 ? setActive(false) : setActive(true);
        console.log(active);
    }

    const fillRightInput = (event: React.ChangeEvent<HTMLInputElement>) => { // any type
        const {name, value} = event.target;
        checkButtonStatus(value);
        
        setUserData(prev => ({
            ...prev,
            [name] : value
    }))
    // reuse custom hook 
    }

    const submit = () => {
        console.log('Submited');
        if(!checkEmailAndPassword(data)) {
            console.log("setuj na true")
            setErrorMessage(true);
        }
        // funkcija submit koja prosledjuje data {email, password} na validaciju
        // validacija ce sadrzati dosta kombinacija recimo polje ne smete stavljati prazno, 
        // koje sve karaktere lozinka mora da sadrzi   
    }
    return {active, errorMessage, fillRightInput, submit};
}

export default useLoginData;


