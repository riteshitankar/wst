import React,{useState} from "react";
// import Forui from './Components/comp1.jsx'    // working
import Forui from './Components/comp2.jsx'
import LanguageGrid from './Components/languagegrid.jsx'
import {languages} from './Components/Dataset.js'

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


const App = () => {
    const [dataSetLanguages, setDataSetLanguages] = useState(languages);

    return (
        <>
        <h1>Output of App.jsx</h1>
        
        <Forui dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />


        <LanguageGrid dataSetLanguages={dataSetLanguages} />


        </>
    )
}

export default App