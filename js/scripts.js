let allPizzas = [];


function pizza(size, sauce, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.dressing = dressing;
  }


  //UI logic

  window.addEventListener("load", runapp);
function runapp() 
{
  let size;
  let sauce;
  let toppings = [];
  let dressing;

  const order = document.getElementById("Order");
  console.log( document.getElementById("Order"));


  order.addEventListener("click", sizePicker());

  function sizePicker()
  {
    console.log("Working!")
  }
}