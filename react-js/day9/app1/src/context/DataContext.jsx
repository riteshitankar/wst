import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export const useData = () => useContext(DataContext)

const DataProvider = ({ children }) => {
  const [name1, setName1] = useState('ritesh don')
  const [data, setData] = useState(555)
  const [status, setStatus] = useState(true)

  return (
    <DataContext.Provider value={{name1, data, setData, status }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
