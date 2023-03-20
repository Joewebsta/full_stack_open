var calculateBmi = function (height, weight) {
    var heightInMeters = height / 100;
    var BMI = weight / (heightInMeters * heightInMeters);
    if (BMI < 18.5)
        return 'Underweight';
    if (BMI >= 18.5 && BMI <= 24.9)
        return 'Normal Healthy Weight';
    if (BMI >= 25 && BMI <= 29.9)
        return 'Overweight';
    return 'Obese';
};
console.log(calculateBmi(180, 85));
