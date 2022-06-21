const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   var n = parseInt(result.input);
    for(i=0 ; i<n ; i++){
    if(n % i ==0 && i % 2 !==0)
    console.log(i);
}
  
});
