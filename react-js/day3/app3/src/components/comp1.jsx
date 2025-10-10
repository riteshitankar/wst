const Component1 = (props) => {
    return(
        <h1 className="fw-normal">Hello user,
            I am <i className="bg-danger">{props.name}</i> , Welcoming you to my site.
        </h1>
    )
}

export {Component1}