let Num = document.getElementById('num');
let Dec = document.getElementById('dec');
let Res = document.getElementById('res');
let Inc = document.getElementById('inc');
let Body = document.body;

// declaration
function Decrease(){
 Num.innerText--
 if(Num.innerText < 0){
  Body.style.backgroundColor = 'yellow'
 }
}

// expression
let Reset = function(){
  Num.innerText = 0
  if(Num.innerText == 0){
    Body.style.backgroundColor = 'red' 
  }
}

 Res.addEventListener('click', Reset)
// arrow
 let Increase = ()=>{
  Num.innerText++
  if (Num.innerHTML > 0) {
    Body.style.backgroundColor = 'green'
  }
 }

 Inc.addEventListener('click', Increase)

//  if (Num){
// Body.style.background = 'yellow'
//  } else if (Num >0) {
//   Body.style.background = 'red'
//  }else{
//   Body.style.backgroundColor = 'green'
//  }

