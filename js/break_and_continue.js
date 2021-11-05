while(true){
    var userInput = prompt("Type in a number between 1 and 50")
    if(userInput>=1&&userInput<=50){
        alert("Your number is "+ userInput)
        break
    }else{
        alert("Not a valid entry")
    }
}

var userInput = prompt("Type in a number between 1 and 50")
console.log("Number to skip" + userInput)
for (var i = 1; i < 50; i++){
    if(i % 2 == 0){
        continue
    }else if(i == userInput){
        console.log("Yikes! Skipping number" + i)
    }else{console.log("Here is an odd number" + i)

    }


}
