//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

// write the code with me here only ok
const getStudentData=()=>{
setTimeout(()=>{
console.log("my first name is rohan")
setTimeout(()=>{
    console.log("my last name is kakare")
    setTimeout(()=>{
        console.log("i m from pune ")
        setTimeout(()=>{
            console.log("my dob 17 -11-1998")
            setTimeout(()=>{
                console.log("i love playing cricket")
                setTimeout(()=>{
                    console.log("i m graduate")  
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000)
}
getStudentData();
