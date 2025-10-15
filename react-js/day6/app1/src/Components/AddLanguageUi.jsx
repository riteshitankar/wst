import React, { useState } from "react"

// import "./styles/style.scss"

const AddLanguageUi = (props) => {

    let [formData, setFormData] = useState({
        title: "", scope: [], difficulties: "", duration: ""
    })

    // these code is used for input validation for title
    let [checkUniqueTitle, setCheckUniqueTitle] = useState(false)

    // these code is for to fill all field otherwise form does not submit 
    let allFilledAreFill = (
        formData.title.trim() !== "" &&
        formData.scope.length > 0 &&
        formData.duration.trim() !== "" &&
        formData.difficulties.trim() !== "" &&
        checkUniqueTitle) // make sure title is unique
        


    // it is used for added new data and fill formed
    const handleChange = (event) => {
        let { name, value } = event.target

        if (name == "scope") {
            value = value.split(",")
            value = value.map((item) => { return item.trim() })
        }
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // these code is for submit the language dada 
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        props.dataSetLanguagesHandler((prev) => {
            // return [...prev, formData] Adding in the last of dataset
            return [formData, ...prev] //adding the dataset in the start
        })
        setFormData({ title: "", scope: [], difficulties: "", duration: "" })
    }

    // check duplicate title & not alow to same 
    const checkTitle = (event) => {
        try {
            let { value } = event.target

            let result = props.dataSetLanguages.filter((language) => {
                return value.toLowerCase() == language.title.toLowerCase()
            })

            if (result.length != 0) throw ("duplicate entry !")

            setCheckUniqueTitle(true)

        } catch (error) {
            console.log("Checktitle error : ", error)
            setCheckUniqueTitle(false)
        }
    }

    




    return (
        <>
            <div className="add-language-form d-flex bg-secondary flex-column gap-2 m-5">
                <h1 className="text-center fs-1 fw-bold">Add Languages !</h1>

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 input-form m-3 p-2" value={formData.title}>

                    <input onChange={(event) => {
                        handleChange(event)
                        checkTitle(event)
                    }}
                        className="form-control form-check" type="text" name='title' value={formData.title} placeholder="title" />
                    {
                        !checkUniqueTitle ? <h1 className='fw-bold p-2 bg-red text-light '>Title has to be unique !</h1> : null

                    }



                    <input onChange={handleChange}
                        className="form-control form-check" type="text" name='scope' value={formData.scope} placeholder="Scope" />



                    <input onChange={handleChange} className="form-control form-check" type="text" name='duration' value={formData.duration} placeholder="duration" />


                    <input onChange={handleChange} className="form-control form-check" type="text" name='difficulties' value={formData.difficulties} placeholder="difficulties" />

                    {/* <button className="btn btn-dark">Add Language !</button> */}

                    <button
                        className={`btn fs-3 fw-bolder text-dark px-4 py-2 ${allFilledAreFill ? "btn-success" : "btn-secondary"}`}
                        disabled={!allFilledAreFill}
                    >
                        Add Language !
                    </button>


                </form>
            </div>
        </>
    )
}

export default AddLanguageUi