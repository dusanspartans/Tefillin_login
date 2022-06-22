interface LoginData {
    email: string;
    password: string;
}

const config = {
    passwordValidation: {
        upperCase: /^[A-Z]*$/,
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        minLength: 8,
        maxLength: 16

    }
}

// definise ovde state za password check ili napravi novi hook

export const checkEmailAndPassword = ({email, password}: LoginData) => {

    //const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    
    if(!config.passwordValidation.upperCase.test(password[0])) {
        console.log('Nema Veliko slovo');
        return  "Password must begin with upperCase letters" 
    }
    
    if(!config.passwordValidation.specialChar.test(password)) {
        console.log('Nema specijalan karakter');
        return  "Password must contain at least one special character" 
    }

    if(password.length < config.passwordValidation.minLength || password.length >= config.passwordValidation.maxLength) {
        return "Password must contain at least eiht characters";
    }

    return "";
   

}

