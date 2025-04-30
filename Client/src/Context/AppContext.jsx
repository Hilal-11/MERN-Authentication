import { createContext , useState , useEffect } from 'react'
import axios from 'axios'
export const AppContext = createContext();

export function AppContextProvider({children}) {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin , setIsLoggedin] = useState(false)
    const [userdata , setUserdata] = useState(false)

    
    const stateValueOfData = {
        BACKEND_URL,
        isLoggedin, setIsLoggedin,
        userdata, setUserdata
    }

    
return <AppContext.Provider value={ stateValueOfData }>
    {children}
</AppContext.Provider>

}

export default AppContext