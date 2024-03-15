
let email = 'okasha@gmail.com'
let pass = 'fb12345'

let andOperatorOutput = email === 'okasha@gmail.com'  && pass  === 'fb12345'
console.log(andOperatorOutput);



let firstValue = "A"
let secondValue = "B"
let orOperatorOutput = firstValue === "A" || secondValue === "B"
//                      true              ||   true
//                                  true
console.log(orOperatorOutput);



console.log(!(5 < 4)); // Not Operator



// Conditional Statements
let isPassed = true
if (isPassed){
    console.log("Bike mil gy");
}
else{
    console.log("sadar janay ke kitne hua");  
}




let vehicle = "rickshaw"
let vehColor = 'red'

if(vehicle === 'car'){
    if(vehColor === 'red'){
        console.log("right side wale parking me jao");
    }
    else{
        console.log("left side wale parking me jao");
    }
}
else if(vehicle === 'bike'){
    console.log("bike ke parking me jao");
}
else if(vehicle === 'truck'){
    console.log("truck ke parking ke jao");
}
else{
    console.log("wapis jao");
}


