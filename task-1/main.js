const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var n = parseInt(result.input);
  

a = n % 10;
b = parseInt(n / 10) % 10;
sum = a + b;
console.log(sum);
  
});
