import { createContext , useState , useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
export const AppContext = createContext();

export function AppContextProvider({children}) {

    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin , setIsLoggedin] = useState(false)
    const [userData , setUserData] = useState('')
    

    const getUserData = async () => {
       try{
        const {data} = await axios(VITE_BACKEND_URL + "/api/user/getUserData")
        data.success ? setUserData(data.userData.name) : toast.error(data.message)
       }catch(error){
            toast.error(error.message)
       }
    }

    // useEffect(() => {
    //     getUserData()
    // }, [])
    const stateValueOfData = {
        VITE_BACKEND_URL,
        isLoggedin, setIsLoggedin,
        userData,
        getUserData , 
    }

    
return <AppContext.Provider value={ stateValueOfData }>
    {children}
</AppContext.Provider>

}

export default AppContext