const buttonArr = [
  document.querySelector('#limestone-quantity-up'),
  document.querySelector("#limestone-quantity-down"),
  document.querySelector('#bertrandite-quantity-up'),
  document.querySelector("#bertrandite-quantity-down"),
  document.querySelector(".limestone-remove"),
  document.querySelector(".bertrandite-remove")
  
]
const textArr = [
  document.querySelector(".limestone-total-quantity"),
  document.querySelector(".bertrandite-total-quantity")
]
let counter = 1
let text
for(let i = 0; i < buttonArr.length; i++)
{
  if(i == 0 || i == 2)
  {
    plus();
  } if(i == 1 || i == 3)
  {
    minus();
  }
  
  function updateDisplay()
  {
    if(i == 0 || i == 1)
    {
      text = 0
    } else
    {
      text = 1
    }
    textArr[text].innerHTML = "Quantity: " + counter;
  }
  function plus()
  {
    buttonArr[i].addEventListener('click',()=> {
      counter++
      updateDisplay();
    })
  }
  function minus()
  {
    buttonArr[i].addEventListener('click',()=> {
      if(counter > 0)
      {
        counter--
        text = 1
        updateDisplay();
      }
    })
  }
}
