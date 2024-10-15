import { useState, createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [isLoding, setLoding] = useState(false)
    const [isError, setError] = useState(false)
    const [email, setemail] = useState([]);
    const [password, setpassword] = useState([]);
    const [logemail, setlogemail] = useState([]);
    const [logpassword, setlogpassword] = useState([]);
    const [searchdata, setsearch] = useState("");

    return (
        <AuthContext.Provider value={{  isLoding, setLoding, isError,
         setError, email, setemail, password, setpassword,logemail, setlogemail,logpassword, setlogpassword,searchdata, setsearch}}>
            {children}
        </AuthContext.Provider>
    )

}