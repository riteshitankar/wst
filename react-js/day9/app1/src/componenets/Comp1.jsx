import React from "react";
import { useData } from "../context/DataContext";

const Comp1 = () => {
    let{name1, data,status, setData} = useData()
    return(
        <div>
            <h1 style={{color:'red'}}>heading 1</h1>
            <h2>{name1}</h2>
            <h2>{data}</h2>
            <h2>{status ? "true":"false"}</h2>
            <button onClick={() => {setData(prev => prev +1 )}}>
                <h3>click here</h3>
            </button>
        </div>

    )
}

export default Comp1