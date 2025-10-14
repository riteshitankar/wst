import React,{useState} from 'react'

// import Comp1 from './Components/comp1'
import LanguageGrid from './Components/Languagesgrid.jsx'
import AddLanguageUi from './Components/AddLanguageUi.jsx'
import {languages} from './Components/Dataset.js'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


const App = () => {
  let [dataSetLanguages, setDataSetLanguages] = useState(languages)

  return (
    <>
    <h1>check running or not</h1>
    
    <AddLanguageUi dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages}/>
    
{/* dataSetLanguagesHandler */}

    <LanguageGrid dataSetLanguages={dataSetLanguages}/>
    </>
  )
}

export default App