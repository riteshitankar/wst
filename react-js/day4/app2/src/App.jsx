import React from "react";
import LanguageGrid from  './components/languagegrid1.jsx'      // conditional rendering
import AddLanguage from  './components/addlanguage.jsx'         //  


// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
    return (
        <>
        <h1>LANGUAGE</h1>

        <LanguageGrid />
        <AddLanguage />
        </>
    )
}
export default App