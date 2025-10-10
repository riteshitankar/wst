import React from "react";

// react hook
import { useState } from "react";

// import images
import image1 from './asset/images/im1.jpg'
import image2 from './asset/images/img2.jpg'
import image3 from './asset/images/img3.jpg'
const App = () => {

    let [totalcount, countfunction] = useState(0)

    function handleClicks() {
        countfunction((prev1) => prev1 +2)
        console.log(totalcount)
    }

    return (
        <>
            <h1 className="underline font-extrabold bg-blue-500">Hello India</h1>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>

            <div>
                {
                    totalcount == 0? <h1>Click to start counter X2</h1>: <h1>Total {totalcount}</h1>
                }
                <button onClick={handleClicks} className="bg-green-500 text-center">
                increase count

            </button>
            </div>
        </>


    )
}

export default App;
