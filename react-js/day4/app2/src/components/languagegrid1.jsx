import React from "react";
import { useState } from "react";
import {languages} from './Dataset.js'

const LanguageGrid = () => {
    
    let [data,setData] = useState(languages)

    return (
        <div>
            <h1>Language Grid</h1>
            <div>
                {
                    data.map((item, index)=>{
                        return(
                            <>
                            <h2 className="fw-normal bg-info">ID : {item.id}</h2>
                            <h2 className="fw-normal">Title : {item.title}</h2>
                            <h2 className="fw-normal">Duration : {item.duration}</h2>
                            <h2 className="fw-normal">Difficulties : {item.difficulties}</h2>
                            {/* normal-method for array कामचलाऊ   */}
                            <h2 className="fw-normal">Scope : {item.scope}</h2> 
                            {/* recommended method for array, actual method */}
                            <h2 className="fw-normal">Scope : 
                                {
                                    item.scope.map((element,ind)=>{
                                        return (
                                            <h3>{element}</h3>
                                        )

                                    })
                                }
                            </h2>
                            </>
                        )
                    })
                }
            </div>
        </div>

    )
}


export default LanguageGrid