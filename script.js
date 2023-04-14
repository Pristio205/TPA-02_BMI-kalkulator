const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const bmi = weight / Math.pow(height / 100, 2);
  result.textContent = `Your BMI is ${bmi.toFixed(1)}.`;

  if (bmi < 18.5) {
    result.className = 'underweight';
    result.textContent += ' You are underweight.';
  } else if (bmi < 25) {
    result.className = 'normal';
    result.textContent += ' You have a normal weight.';
  } else if (bmi < 30) {
    result.className = 'overweight';
    result.textContent += ' You are overweight.';
  } else {
    result.className = 'obesity';
    result.textContent += ' You have obesity.';
  }
});
