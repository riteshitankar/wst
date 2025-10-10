
const Part4 = ({ number1, number2, newStyle1, line1, add }) => {
    return (
        <div style={{ fontFamily: 'cursive', fontWeight:100}}>
            <h2>My first mobile number is {number1} </h2>
            <h2>My another mobile number is {number2}</h2>
            <h2>And my written line : <i style={newStyle1}>{line1}</i></h2>
            <h3>The sum of two numbers 40 and 70 are : {add(40, 70)}</h3>
        </div>
    )
}

export {Part4}