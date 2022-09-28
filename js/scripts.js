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

  const order = document.getElementById("Orderbtn");
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

  const sizeC = document.getElementById("sizeC");
  const sauceC = document.getElementById("sauceC");
  const cheeseC = document.getElementById("cheeseC");
  const cheesetwoC = document.getElementById("cheesetwoC");
  const meatC = document.getElementById("meatC");
  const meattwoC = document.getElementById("meattwoC");
  const veggieC = document.getElementById("veggieC");
  const veggietwoC = document.getElementById("veggietwoC");
  const herbsC = document.getElementById("herbsC");
  const dressingC = document.getElementById("dressingC");



  order.addEventListener("click", sizePicker);

  function sizePicker()
  {
    toggler(sizeC)
    //sizeC.style.visibility = "visible";
  }

  function toggler(element)
  {
    console.log(element);
    console.log(element.style.visibility)
    if(element.style.visibility  === "collapse")
    {
        console.log("reached!")
        element.style.visibility  = "visible";
    }else{
        element.style.visibility  = "collapse";
        console.log("reached! - bad")
    }
  }
}