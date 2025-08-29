
// attempt 1 : working
/*
let e2 = document.getElementById("e2")

function addBorder() {
    console.log(e2.classList[0])

    if (e2.classList.contains('border')) {
        e2.classList.remove("border");

    }else{
        e2.classList.add('border')
    }
}

let button = document.querySelector("#btn1")

button.addEventListener("click", addBorder)
*/


// attept2 >> working!

let e2 = document.getElementById("e2")

function addBorder() {
    let borderClassExist = e2.classList.contains("border")
    console.log(e2.classList[0])
    if (borderClassExist) {
        e2.classList.remove('border');
    }else{
        e2.classList.add('border');
    }
}

let button = document.querySelector("#btn1")

button.addEventListener("click", addBorder)





// attempt 3 >> not working

// let e2 = document.getElementById("e2")

// function addBorder() {
//     let borderClassExist = e2.classList.contains("border")
//     console.log(e2.classList[0])
//     if (borderClassExist) {
//         e2.classList = `${e2.classList}`
//     }else{
//         e2.classList = `${e2.classList} border`
//     }
// }

// let button = document.querySelector("#btn1")

// button.addEventListener("click", addBorder)
