import { createContext , useState , useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
export const AppContext = createContext();

export function AppContextProvider({children}) {

    axios.defaults.withCredentials = true

    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin , setIsLoggedin] = useState(false)
    const [userData , setUserData] = useState(false)
    const [isUserVarified , setIsUserVarified] = useState('')

    
    const getAuthenticationState = async () => {
        try{
        const {data} = await axios.get(VITE_BACKEND_URL + "/api/auth/is-auth")
        if(data.success) {
            setIsLoggedin(true);
            getUserData();
        }
        }catch(error){
            toast.error(error.message)
        }
    }
    const getUserData = async () => {
       try{
        const {data} = await axios(VITE_BACKEND_URL + "/api/user/getUserData")
        data.success ? setUserData(data.userData.name) : toast.error(data.message)
        data.success ? setIsUserVarified(data.userData.isAccountVarified) : toast.error(data.message)

       }catch(error){
            toast.error(error.message)
       }
    }


    useEffect(() => {
        getAuthenticationState()
    }, [])

    const stateValueOfData = {
        VITE_BACKEND_URL,
        isLoggedin, setIsLoggedin,
        userData, setUserData ,
        getUserData , isUserVarified
    }

    
return <AppContext.Provider value={ stateValueOfData }>
    {children}
</AppContext.Provider>

}

export default AppContext