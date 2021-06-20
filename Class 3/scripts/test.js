function getHelloMessage(name){
    return "Hello " + name + ", how is it going?";
}

function sum(num1, num2){
    return num1 + num2;
}

function divide(num1, num2){
    if(num2 != 0) {
        return num1 / num2;
    } 
    // Show an error if the user is trying to divide by zero and return zero as the result
    console.log("Error you are trying to divide by zero");
    return 0;
    
}

/*------------------- OBJECTS ---------------------*/
// classes
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = "Student";
    }
}

function testClass() {
    let c1 = new Car("Form","A", "1934");
    console.log(c1);
}

// this is an object constructor
function Dog(name, age, color ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.owner = "Sergio";
}

function createObjects() {
    // object literal
    let data = {
        name: 'Test1',
        speed: 111,
        color: "Red",
        size: 12
    };
    console.log(data);

    // object constructor
    let fido = new Dog("Fido", 2, 'white');
    console.log(fido);
    
    let lola = new Dog("Lola", 4, 'pink');
    console.log(lola);
}
/*------------------------------------------------*/

function runTests(){
    let message = getHelloMessage("Paola");
    console.log(message)

    let result = sum(12, 49);
    console.log("The result is: " + result)

    // HomeWork 1
    /* You should not allow the user to divide by zero */
    let divRes = divide(9, 3);
    console.log("The result 1: " + divRes)
    let divRes2 = divide(1, 8);
    console.log("The result 2: " + divRes2)
    let divRes3 = divide(10, 0);
    console.log("The result 3: " + divRes3)
}

runTests();

function testAjaxGet(){
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(response) {
            console.log("Server says: ", response);
        },
        error: function(errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });
}