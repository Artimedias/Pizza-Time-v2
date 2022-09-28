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
  let sizeL;
  let sauceL;
  let toppingsL = [];
  let dressingL;

  const order = document.getElementById("Order");
  const size = document.getElementById("Size");
  const sauce = document.getElementById("Sauce");
  const cheese = document.getElementById("Cheese");
  const cheesetwo = document.getElementById("CheeseTwo");
  const meat = document.getElementById("Meat");
  const meattwo = document.getElementById("MeatTwo");
  const veggie = document.getElementById("Veggie");
  const veggietwo = document.getElementById("VeggieTwo");
  const herbs = document.getElementById("Herbs");
  const dressing = document.getElementById("Dressing");



  order.addEventListener("click", sizePicker());

  function sizePicker()
  {
    console.log("Working!")
  }
}