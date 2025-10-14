import React, { useState } from 'react'
// import "./styles/style.scss"

const LanguageGrid = (props) => {   
    return (
        <div className='language-grid container'>
            <h1 className='fw-bold display-5 text-center my-5'>Language Grid !</h1>
            <div className='row gy-4'>
                {
                   props.dataSetLanguages.map((item, index) => {
                        return (
                            <div key={index} className='col-md-4'>
                                <div className='card h-100 p-3'>
                                    <h1 className='card-title h4'>{item.title}</h1>
                                    <div className='mb-3'>
                                        <span className='fw-semibold'>Scope :</span>
                                        <div className='d-flex flex-wrap gap-2 mt-2'>
                                            {
                                                item.scope.map((element, index) => {
                                                    return (
                                                        <span key={index} className='badge bg-secondary p-2'>
                                                            {element}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <h2 className='h6'>
                                        <span className='fw-semibold'>Duration : </span>
                                        <span>{item.duration} weeks</span>
                                    </h2>
                                    <h2 className='h6 mt-2'>
                                        <span className='fw-semibold'>Difficulties : </span>
                                        <span className={item.difficulties.toLowerCase() == "Hard".toLowerCase() ? "badge bg-danger p-2" : item.difficulties.toLowerCase() == "Easy".toLowerCase() ? "badge bg-success p-2" : item.difficulties.toLowerCase() == "Medium".toLowerCase() ? "badge bg-warning text-dark p-2" : null} >
                                            {item.difficulties}
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LanguageGrid