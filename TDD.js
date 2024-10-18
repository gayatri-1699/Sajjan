function add(numbers) {
    if (numbers === "") 
    return 0;
  let delimiter = /[\n,]/;
  
  if(numbers.startwith("//")) {
    const parts = numbers.split("\n",2);
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }
  const numList = numbers.split(delimiter).map(n => parseInt(n));

  const negatives = numList.filter(n => n < 0);
  if(negatives.length > 0) {
     throw new Error('negative numbers not allowed: ${negatives.join(",")}');
  }

  return numList.reduce((sum,n) => sum +(isNan(n) ? 0:n),0);
}
 
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
     event.preventDefault ();
     const inputString = document.getElementById('inputString').value;
     const resultDiv = document.getElementById('result');
     const errorDiv = document.getElementById('error');

     resultDiv.textContent = '';
     errorDiv.textContent = '';

     try {
        const result = add(inputString);
        resultDiv.textContent = "Sum: " + result;
     } catch (error) {
        errorDiv.textContent = error.message;
     }
});

