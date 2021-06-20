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