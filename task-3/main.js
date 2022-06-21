const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = ;

const e = n % 10;
const d = parseInt(n / 10) % 10 ;
const c = parseInt(n / 100) % 10;
const b = parseInt(n / 1000) % 10;
const a = parseInt(n / 10000) % 10;
console.log(a);

if(a==b || a==c || a==d || a==e || b==c || b==d || b==e || c==d || c==e || d == e  ){
console.log('YES');
}else{
    console.log('NO');
}
  
});
