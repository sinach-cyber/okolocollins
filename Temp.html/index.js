const celsiusEI = document.getElementById("Celcius");
const FahrenheitEI = document.getElementById("Fahrenheit");
const KelvinEI = document.getElementById("Kelvin");

function computeTemp(){
  //*Add + to avoid String problem
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "Celcius":
      KelvinEI.value = currentValue + 273.15; 
      FahrenheitEI.value = currentValue * 1.8 + 32;
      
      break;
    case "Fahrenheit":
      celsiusEI.value = (currentValue - 32) / 1.8;
      KelvinEI.value = (currentValue -32) / 1.8 + 273.15;
      
      break;  
    case "Kelvin":
      celsiusEI.value = currentValue - 273.15;
      FahrenheitEI.value = (currentValue -273.15) * 1.8 + 32;
      break;  
  
    default:
      break;
  }
}