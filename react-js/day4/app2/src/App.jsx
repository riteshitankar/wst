import React, {userState} from "react";
import {languages} from './components/Dataset.js'
import LanguageGrid from  './components/languagegrid2.jsx'      // 
import Forui from './components/forui1.jsx'    // for ui changes on index
// import LanguageGrid from  './components/languagegrid1.jsx'      // 
// import {AddLanguage} from  './components/addlanguage.jsx'         //  
// import {AddLanguage2} from  './components/addlanguage.jsx'         //  
// import {} from  './components/addlanguage.jsx'         //  

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
    let [dataSetLanguages, setDataSetLanguages] = userState(languages)
    return (
        <>
        <h1>LANGUAGE</h1>

        <Forui dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />
        <LanguageGrid dataSetLanguages={dataSetLanguages} />


        {/* // <AddLanguage />
        // <AddLanguage2 /> */}
        {/* <LanguageGrid dataSetLanguages={dataSetLanguages} /> */}
        
        </>
    )
}
export default App