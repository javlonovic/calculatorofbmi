function calculateBmi(){
    const name = document.getElementById("name");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const result = document.getElementById("#result");
    
    const weight = perseFloat(weughtVal.value);
    const height = perseFloat(heightVal.value);

    let bmi = ((weight/(height*height)).toFixed(2));

      result.textContent = ` ${name.value}'s BMI is ${bmi}`;
}