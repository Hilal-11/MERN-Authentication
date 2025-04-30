import { createContext , useState , useEffect } from 'react'
import axios from 'axios'
export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [ fetchData , setFetchData ] = useState('')
    const [ loading , setLoading ] = useState(true)
    const FetchApiData = async () => {
        try{
            setLoading(true)
            const result = await axios('https://api.sampleapis.com/playstation/games');
            // const response = await result.json()
            setFetchData(result.data)
            setLoading(false)
        }catch(error){ 
            console.log(error.message)
        }
    }

    useEffect(() => {
        FetchApiData();
      }, [])
    const stateValueOfData = {
        loading,
        setLoading,
        fetchData,
        setFetchData,
        FetchApiData,
    }
return <AppContext.Provider value={ stateValueOfData }>
    {children}
</AppContext.Provider>

}

export default AppContext