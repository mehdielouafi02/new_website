let plus = document.getElementsByClassName('plus');
let moins = document.getElementsByClassName('moins');
let inputs = document.getElementsByClassName('inp');


for (let i=0 ; i<plus.length; i++) {


plus[i].addEventListener('click', function(){

inputs[i].value = parseInt(inputs[i].value,10)+1 ;

updateTotal();



})

}


for (let i=0 ; i<moins.length ; i++) {

moins[i].addEventListener('click', function(){

    if (parseInt(inputs[i].value,10) > 0){

    inputs[i].value = parseInt(inputs[i].value,10)-1 ;

    updateTotal();
    
}

})

}

let total = document.getElementById('total');   
let prices = document.getElementsByClassName('price');

function updateTotal() {

let sum =0 ;

for (let i=0 ; i<prices.length ; i++) {

sum = sum + parseInt(inputs[i].value,10) * parseInt(prices[i].innerHTML,10) ;

}


total.innerHTML = sum ;}

    let removebtn=Array.from(document.getElementsByClassName(`delete`));
    let card=Array.from(document.getElementsByClassName(`card`));
    for (let i=0; i<removebtn.length;i++){
        removebtn[i].addEventListener(`click`,function(){
           card[i].remove();
           updateTotal();
    })
}


