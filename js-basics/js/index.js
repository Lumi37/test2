//ch_1

/*let arr = new Array()
let limit = prompt("Input your limit",10)
console.log(limit)
for(let i = 0; i<=limit; i++){
  arr[i] = i;
  if(arr[i]%2 == 1)
    console.log(arr[i])
}*/

//ch_2

/*
function printPropaideia(arr){

  Object.keys(arr).forEach(function(key){
     console.log(key,"=",arr[key])
  });
  console.log(Object.keys(arr)) 
}




let propaideia = [];
for (let k = 0 ; k <10; k++){

  propaideia[k] = {};
  
  for (let j=1; j <= 10; j++){
    propaideia[k] [ `${ k + 1 }x${ j }`]  =(k+1)*j;          // e.g. property of propaideia[1][`1x1'] = 1*1/// propaideia[1]{ "1x1" = 1 etc..}
  }
  
}
propaideia.forEach(printPropaideia)
*/

//ch_3

/*
let kmtomiles,milestokm;
let pass = 0
do{
  choice = prompt("choose: km to miles(k)| miles to km (m)",)
  if(choice == "k" | choice =="m")
    pass = 1
}while(pass == 0);
if( choice == "k"){
  kmtomiles = prompt("Enter amount of km to be converted to Miles: ",)
  alert(kmtomiles*0.62137 + " Miles")
}
if(choice == "m"){
  milestokm = prompt("Enter amount of miles to be converted to Kilometers ",)
  alert(milestokm*1.60934 + " Kilometers")
}
*/

//ch_4

let arr = new Array()
let limit = prompt("Input your limit",10)
console.log(limit)