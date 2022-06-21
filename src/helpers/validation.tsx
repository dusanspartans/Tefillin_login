interface LoginData {
    email: string;
    password: string;
}

export const checkEmailAndPassword = ({email, password}: LoginData) => {

    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    
    
    if(emailRegex.test(email) && passwordRegex.test(password)) {
        return true;
    }else {
        console.log("Vratilo je false")
        return false;
    }

}

