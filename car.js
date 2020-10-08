//class Vehicle
class Vehicle {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //method Information
    Information() {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}

class Cars extends Vehicle {
    //constructor that will take 4 arguments
    constructor(make, model, year, doors) {

        //super invoke the parent
        super(make, model, year);
        //local instance doors
        this.doors = doors;
    }
    //method Information in child class Cars
    Information() {
        //invoke 
        super.Information();
        console.log(`Doors ${this.doors}`);
    }
}
//instance of a vehicle with 4 arguments
let myCar = new Cars('Ford', 'Mustang', 2012, 5);
//invoke information
myCar.Information();

//instance of a vehicle with 3 arguments

//let myVehicle = new Vehicle('VW', 'Golf', 2000);
//myVehicle.Information();