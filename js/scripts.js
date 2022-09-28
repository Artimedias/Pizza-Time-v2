//An array of all pizzas. This will be used later to print out the orders.
let allPizzas = [];

//The pizza object
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
    //These are the values that will be used to make the pizza object later
  let sizeL;
  let sauceL;
  let toppingsL = [];
  let dressingL;

  //These are the next buttons
  const order = document.getElementById("Orderbtn");
  const size = document.getElementById("Sizebtn");
  const sauce = document.getElementById("Saucebtn");
  const cheese = document.getElementById("Cheesebtn");
  const cheesetwo = document.getElementById("CheeseTwobtn");
  const meat = document.getElementById("Meatbtn");
  const meattwo = document.getElementById("MeatTwobtn");
  const veggie = document.getElementById("Veggiebtn");
  const veggietwo = document.getElementById("VeggieTwobtn");
  const herbs = document.getElementById("Herbsbtn");
  const dressing = document.getElementById("Dressingbtn");

  //These are the divs that handle each part of the order
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
  size.addEventListener("click", sizeStuff)
  sauce.addEventListener("click", sauceStuff)


  //These are the functions that handle calling the toggler for various things. Im not quite sure why I cant just call it with the event listener directly though, if I could get some feedback on that it would be greatly appreciated
  function sizePicker()
  {
    toggler(sizeC)
  }

    //These are the functions that give actual values to the Ls
  function sizeStuff()
  {
    //this giant line here just tells it how to get the thing it needs
      sizeL = document.getElementById("sizeI").options[document.getElementById("sizeI").selectedIndex].value;
      toggler(sizeC)
      toggler(sauceC)
  }

  function sauceStuff()
  {
    
  }

 

  function toggler(element)
  {
    console.log(element);
    console.log(element.style.visibility)
    if(element.style.visibility  === "visible")
    {
        console.log("reached!")
        element.style.visibility  = "collapse";
        
    }else{
        element.style.visibility  = "visible";
        console.log("reached! - bad")
    }
  }
}