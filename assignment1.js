var randomNumber = Math.floor((Math.random()*10));
//var randomNumber = 11;
switch (randomNumber) {
    case 0:
    case 1:
    case 2:
    console.log(`The random number is ${randomNumber}.`);
    break;
    case 3:
    case 4:
    case 5:
    case 6:
    console.log("The random number is between 3 and 7.");
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    console.log("The random number is greater than 7.");
    break;
    default:
    console.log("Something went wrong...");
}


