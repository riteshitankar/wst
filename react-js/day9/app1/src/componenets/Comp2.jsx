import React from 'react'

import {useData} from '../context/DataContext'

const Comp2 = () => {
    let {data, status} = useData() 
    return (
        <div>
            <h1>heading 2</h1>
            <h2>{data}</h2>
            <h2>{status?'true':'false'}</h2>
        </div>
    )
}

export default Comp2