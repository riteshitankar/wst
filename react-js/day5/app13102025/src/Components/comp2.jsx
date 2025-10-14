import React, { useState } from "react";

const Forui = (props) => {
    const [formData, setformData] = useState({
        title: "",
        scope: [],
        difficulties: "",
        duration: ""
    });

    const handle_submit = (event) => {
        event.preventDefault();
        props.dataSetLanguagesHandler((prev) => [formData, ...prev]);
        setformData({ title: "", scope: [], difficulties: "", duration: "" });
    };

    const handle_change = (event) => {
        let { name, value } = event.target;
        {(title === "" || scope.length === 0 || difficulties === "" || duration === "") && (
  <h1 className="bg-danger">Please fill the input field</h1>
)}
        
        if (name === "scope") value = value.split(",").map((element) => element.trim());
        setformData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h1 className="text-danger text-center my-3">Add a New Language</h1>
            <div className="container">
                <form className="d-flex flex-wrap gap-2" onSubmit={handle_submit}>
                    <input type="text" onChange={handle_change} name="title" value={formData.title} className="form-control" placeholder="Write title"
                    />
                    <input type="text" onChange={handle_change} name="scope" value={formData.scope} className="form-control" placeholder="Write scope (comma separated)"
                    />
                    <input type="text" onChange={handle_change} name="duration" value={formData.duration} className="form-control" placeholder="Write duration (weeks)"
                    />
                    <input
                        type="text" onChange={handle_change} name="difficulties" value={formData.difficulties} className="form-control" placeholder="Write difficulty (Easy, Medium, Hard)"
                    />
                    <button className="btn btn-success" type="submit">
                        SUBMIT NOW
                    </button>
                </form>
            </div>
        </>
    );
};

export default Forui;
