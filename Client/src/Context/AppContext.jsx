import { createContext , useState } from 'react'
import axios from 'axios'
export const AppContext = createContext();

export function AppContextProvider() {
    const [ fetchData , setFetchData ] = useState([])
    const [ loading , setLoading ] = useState(true)
    const FetchApiData = async () => {
        try{
            setLoading(true)
            const result = await axios('https://api.sampleapis.com/movies/action-adventure');
            const response = await result.data;
            setFetchData(response)
            setLoading(false)
        }catch(error){ 
            console.log(error.message)
        }
    }
    const stateValueOfData = {
        loading,
        setLoading,
        fetchData,
        setFetchData,
        FetchApiData,
    }
return <AppContext.Provider value={ stateValueOfData }>
    { children }
</AppContext.Provider>

}