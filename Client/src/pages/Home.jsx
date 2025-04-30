import React from 'react'
import { useContext , useEffect } from 'react'
import AppContext, { AppContextProvider } from '../Context/AppContext'
import Header from '../Components/Header'
function Home() {
  const { loading , setLoading , fetchData, setFetchData, FetchApiData } = useContext(AppContext);
  console.log(loading)
  useEffect(() => {
    FetchApiData();
  }, [])
  console.log(fetchData)
  console.log(loading)
  
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home