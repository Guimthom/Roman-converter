const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

// Fonction de convertisseur

const convertToRoman = (inputNbr) =>{
const refRomanNbr = [
    {num : "M", value : 1000},
    {num : "CM", value : 900},
    {num : "D", value : 500},
    {num : "CD", value : 400},
    {num : "C", value : 100},
    {num : "XC", value : 90},
    {num : "L", value : 50},
    {num : "XL", value : 40},
    {num : "X", value : 10},
    {num : "IX", value : 9},
    {num : "V", value : 5},
    {num : "IV", value : 4},
    {num : "I", value : 1}
];

// variable qui va venir prendre les refRomanNbr.num 

let romanNbr = "";

for (let i = 0; i < refRomanNbr.length; i++) {
    while (inputNbr >= refRomanNbr[i].value) {
      romanNbr += refRomanNbr[i].num;
      inputNbr -= refRomanNbr[i].value;
    }
  }
  return String(romanNbr);
};

// Vérifier que le champ soit non vide et que ce soit un nombre/chiffre.
const checkUserInput = () => {
if(!numberInput.value || isNaN(numberInput.value)){
    result.innerHTML = `<p id="result">Please enter a valid number</p>`;
    return;
} else if(numberInput.value < 1){
    result.innerHTML = `<p id="result">Please enter a number greater than or equal to 1</p>`;
    return;
}else if(numberInput.value > 3999){
    result.innerHTML = `<p id="result">Please enter a number less than or equal to 3999</p>`;
    return;
};
result.textContent = convertToRoman(numberInput.value);
numberInput.value = "";
};

// Intéractions bouton

convertBtn.addEventListener("click",checkUserInput);
numberInput.addEventListener("keydown", (e) =>{
if(e.key === "Enter"){
    checkUserInput();
}
});