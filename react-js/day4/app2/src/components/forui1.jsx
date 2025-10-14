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
    console.log(formData);
    props.dataSetLanguagesHandler((prev) => {
        return [formData, ...prev]
    });

  };

  const handle_change = (event) => {
    let { name, value } = event.target;

    if (name === "scope") {
      value = value
        .split(",")
        .map((element) => element.trim());
    }

    setformData((prev) => {
        return {...prev,[name]: value }
    });
  };

  return (
    <>
      <h1 className="text-danger">this is for the ui</h1>
      <div>
        <form className="d-flex flex-row" onSubmit={handle_submit}>
          {/* title */}
          <input
            type="text"
            onChange={handle_change}
            name="title"
            value={formData.title}
            className="form-control"
            placeholder="write title"
          />

          {/* scope */}
          <input
            type="text"
            onChange={handle_change}
            name="scope"
            value={formData.scope}
            className="form-control"
            placeholder="write scope"
          />

          {/* duration */}
          <input
            type="text"
            onChange={handle_change}
            name="duration"
            value={formData.duration}
            className="form-control"
            placeholder="write duration"
          />

          {/* difficulties */}
          <input
            type="text"
            onChange={handle_change}
            name="difficulties"
            value={formData.difficulties}
            className="form-control"
            placeholder="write difficulties"
          />

          <button className="bg-success btn" type="submit">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </>
  );
};


export default Forui