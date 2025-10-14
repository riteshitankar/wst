import React, { useState } from 'react'
import "./styles/style.scss"
const AddLanguage = () => {

    // let [formData, setFormData] = useState({
    //     title: "", scope: "", difficulties: "", duration: ""
    // })

    let [title, setTitle] = useState("")
    let [scope, setScope] = useState("")
    let [difficulties, setDifficulties] = useState("")
    let [duration, setDuration] = useState("")

    const handleSumbit = (event) => {
        event.preventDefault()
        console.log('title : ', title)
        console.log('scope : ', scope)
        console.log('duration : ', duration)
        console.log('difficulties : ', difficulties)

        console.log({
            title, scope, difficulties, duration
        })

    }

    const handleTitleChange = (e) => {
        let value = e.target.value
        setTitle(() => {
            return value
        })
    }

    const handleScopeChange = (e) => {
        let value = e.target.value
        setScope(() => {
            return value
        })
    }

    const handleDurationChange = (e) => {
        let value = e.target.value
        setDuration(() => {
            return value
        })
    }

    const handleDifficultiesChange = (e) => {
        let value = e.target.value
        setDifficulties(() => {
            return value
        })
    }

    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold'>Add Language !</h1>
            <form onSubmit={handleSumbit} className='flex flex-col items-center bg-black gap-4 p-3'>

                <input onChange={handleTitleChange} type="text" placeholder='title' value={title} />
                <input onChange={handleDurationChange} type="text" placeholder='duration' value={duration} />
                <input onChange={handleScopeChange} type="text" placeholder='scope' value={scope} />
                <input onChange={handleDifficultiesChange} type="text" placeholder='difficulties' value={difficulties} />

                <button className='bg-green-500 font-bold text-white hover:bg-green-700 p-2 transition-all'>Add Language !</button>
            </form>
        </div>
    )
}



export {AddLanguage}



const AddLanguage2 = () => {
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [arr, setArr] = useState("");
    
    const handlefname = (event) => {
        let fname = event.target.value;
        setFname(() => {
            return fname
        })
    }
    const handlelname = (event) => {
        let lname = event.target.value;
        setLname(() => {
            return lname
        })
    }    
    const handlearr = (event) => {
        let arr = event.target.value;
        
        setArr(() => {
            return arr;
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Your First Name : ', fname);
        console.log('Your Last Name : ',lname);
        
        let data1 = arr.split(',').map(element => element.split(','));
        console.log('Array that you entered : ',data1);
        


    }


    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            Fist name : <input type="text" placeholder='first name' value={fname} onChange={handlefname}/>
            Last name : <input type="text" placeholder='last name' value={lname} onChange={handlelname}/>
            Array : <input type="text" placeholder='array' value={arr} onChange={handlearr}/>
            <button type="submit" value="SUBMIT FORM">Submit</button>
        </form>
        </>    
    )

    

    
}



export {AddLanguage2}



   