const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var n = parseInt(result.input);
  
  a= n % 10;
b= parseInt(n / 10) % 10;
c= parseInt(n / 100) % 10;

if (a>b && b>c){
    console.log((100*a+10*b+c)**2);
} else if (a>c && c>b ) {
    console.log((100*a+10*c+b)**2);
    
} else if (b>c && c>a) {
    console.log((100*b+10*c+a)**2);
    
} else if(b>a && a>c) {
console.log((100*b+10*a+c)**2);    
} 
 else if (c>a && a>b) {
    console.log((100*c + 10*a +b)**2 );
    
} else {
    console.log((100*c + 10*b +a)**2);
}
});
