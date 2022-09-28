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

  //These are the divs that handle each part of the order. C stands for class, even though I ended up using ids instead, I wanted to use I for input.
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
  const finalC = document.getElementById("finalC");





  order.addEventListener("click", sizePicker);
  size.addEventListener("click", sizeStuff)
  sauce.addEventListener("click", sauceStuff)
  cheese.addEventListener("click", cheeseStuff)
  cheesetwo.addEventListener("click", cheeseTwoStuff)
  meat.addEventListener("click", meatStuff)
  meattwo.addEventListener("click", meatTwoStuff)
  veggie.addEventListener("click", veggieStuff)
  veggietwo.addEventListener("click", veggieTwoStuff)
  herbs.addEventListener("click", herbsStuff)
  dressing.addEventListener("click", dressingStuff)


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
    sauceL = document.getElementById("sauceI").options[document.getElementById("sauceI").selectedIndex].value;
    toggler(sauceC)
    toggler(cheeseC)
  }

  function cheeseStuff()
{
    toppingsL[0] = document.getElementById("cheeseI").options[document.getElementById("cheeseI").selectedIndex].value;
    if(toppingsL[0] === "No Cheese")
    {
        toppingsL[1] = "No Cheese"
        toggler(meatC)
    }
    else
    {
        toggler(cheesetwoC)
    }
    toggler(cheeseC)

}

function cheeseTwoStuff()
{
    toppingsL[1] = document.getElementById("cheesetwoI").options[document.getElementById("cheesetwoI").selectedIndex].value;
  toggler(cheesetwoC)
  toggler(meatC)
}

function meatStuff()
{
    toppingsL[2] = document.getElementById("meatI").options[document.getElementById("meatI").selectedIndex].value;
    if(toppingsL[2] === "No Meats")
    {
        toppingsL[3] = "No Meats"
        toggler(veggieC)
    }
    else
    {
        toggler(meattwoC)
    }
    toggler(meatC)
}

function meatTwoStuff()
{
    toppingsL[3] = document.getElementById("meattwoI").options[document.getElementById("meattwoI").selectedIndex].value;
  toggler(meattwoC)
  toggler(veggieC)
}

function veggieStuff()
{
    toppingsL[4] = document.getElementById("veggieI").options[document.getElementById("veggieI").selectedIndex].value;
    if(toppingsL[4] === "No Veggies")
    {
        toppingsL[5] = "No Veggies"
        toggler(herbsC)
    }
    else
    {
        toggler(veggietwoC)
    }
    toggler(veggieC)
}

function veggieTwoStuff()
{
    toppingsL[5] = document.getElementById("veggietwoI").options[document.getElementById("veggietwoI").selectedIndex].value;
  toggler(veggietwoC)
  toggler(herbsC)
}

function herbsStuff()
{
    toppingsL[6] = document.getElementById("herbsI").options[document.getElementById("herbsI").selectedIndex].value;
  toggler(herbsC)
  toggler(dressingC)
}

function dressingStuff()
{
    dressingL = document.getElementById("dressingI").options[document.getElementById("dressingI").selectedIndex].value;
  toggler(dressingC)
  toggler(finalC)
    console.log(toppingsL)
}

 

  function toggler(element)
  {
    if(element.style.visibility  === "visible")
    {
        element.style.visibility  = "collapse";
        
    }else{
        element.style.visibility  = "visible";
    }
  }
}