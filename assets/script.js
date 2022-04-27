let plusButton = document.querySelector("#quantity-up")
let minusButton = document.querySelector("#quantity-down")
let counter = 1
let counterDisplayElem = document.querySelector(".total-quantity")
plusButton.addEventListener('click',()=> {
  counter++
  updateDisplay();
})
minusButton.addEventListener('click',()=> {
  if(counter > 0)
  {
    counter--
    updateDisplay();
  }
})
function updateDisplay()
{
  counterDisplayElem.innerHTML = "Quantity: " + counter;
}