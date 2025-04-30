import { createContext , useState , useEffect } from 'react'
import axios from 'axios'
export const AppContext = createContext();

export function AppContextProvider({children}) {

    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin , setIsLoggedin] = useState(false)
    const [userdata , setUserdata] = useState(false)
    const [username , setUsername] = useState('');
    

    const fetchUserData = async () => {
        const response = await axios(VITE_BACKEND_URL + "/api/user/getUserData")
        console.log(response)
        setUsername(response.user)
        
    }

    useEffect(() =>{
        fetchUserData()
    },[])

    const stateValueOfData = {
        VITE_BACKEND_URL,
        isLoggedin, setIsLoggedin,
        userdata, setUserdata,
        username , 
    }

    
return <AppContext.Provider value={ stateValueOfData }>
    {children}
</AppContext.Provider>

}

export default AppContext