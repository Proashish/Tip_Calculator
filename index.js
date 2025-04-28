const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function calculateTotal () {
    const billValue =billInput.value;
    const tipValue =tipInput.value;
    const totalValue = billValue*(1+tipValue/100);
    totalSpan.innerHTML =totalValue.toFixed(2); // suppose total 115 then using tofixed functin 115.00
   
    
}

btnEl.addEventListener("click",calculateTotal);