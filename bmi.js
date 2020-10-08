//Class BMI
class BMI {

    constructor(height, weight) {
        //local instances
        this.height = height;
        this.weight = weight;

    }
    //method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}
//instance of a class that invoke calculateBMI method
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);