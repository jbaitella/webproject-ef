console.log("helloo Guyys!")

const buttonCalculate = document.getElementById('calculate');
const inputzahl1 = document.getElementById('zahl1');
const inputzahl2 = document.getElementById('zahl2');
const inputzahl3 = document.getElementById('zahl3');
const inputzahl4 = document.getElementById('zahl4');




function calculate(event){
    event.preventDefault();
    console.log('calculate');
    const zahl1 = inputzahl1.value;
   
    console.log(zahl1);
    const zahl2 = inputzahl2.value;
    const zahl3 = inputzahl3.value;
    const resultat = zahl2 / zahl1 * zahl3;
    inputzahl4.value =resultat;
}


buttonCalculate.addEventListener('click', calculate);
