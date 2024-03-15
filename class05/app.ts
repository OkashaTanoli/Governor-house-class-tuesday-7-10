let month = "Ramadan";

if(month == "Ramadan"){
    console.log("You can't drink water!")
}else{
    if(month!= "Ramadan"){
        console.log("You are allowed to drink water as long as it is not Ramadan!")
    }
}

// Simple function without Arguments and Parameters
function screening(){
    console.log("This function is used for screening!");
}
screening();
// to save function inside a variable
let newFunc = screening();
console.log(newFunc);