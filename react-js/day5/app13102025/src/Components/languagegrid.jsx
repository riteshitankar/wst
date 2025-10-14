import React from 'react';

const LanguageGrid = (props) => {
  return (
    <div className="language-grid container">
      <h1 className="fw-bold display-5 text-center my-5">Language Grid!</h1>
      <div className="row gy-4">
        {props.dataSetLanguages.map((item, index) => {
          let badgeClass = "";
          if (item.difficulties.toLowerCase() === "hard") badgeClass = "badge bg-danger p-2";
          else if (item.difficulties.toLowerCase() === "easy") badgeClass = "badge bg-success p-2";
          else if (item.difficulties.toLowerCase() === "medium") badgeClass = "badge bg-warning text-dark p-2";

          return (
            <div key={index} className="col-md-4">
              <div className="card h-100 p-3">
                <h1 className="card-title h4">{item.title}</h1>
                <div className="mb-3">
                  <span className="fw-semibold">Scope :</span>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {item.scope.map((element, idx) => (
                      <span key={idx} className="badge bg-secondary p-2">
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="h6">
                  <span className="fw-semibold">Duration: </span>
                  <span>{item.duration} weeks</span>
                </h2>
                <h2 className="h6 mt-2">
                  <span className="fw-semibold">Difficulties: </span>
                  <span className={badgeClass}>{item.difficulties}</span>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageGrid;
