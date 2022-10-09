###Application Name: 
pizzatimetwo

###Name of Contributor: 
Brett Roper.

###Description of Application: 
A webpage that will will ask the user various questions about what they want to order at a fictional pizza shop, and then tallies up the cost for them.

###Link to github repository: 
[Here](https://github.com/Artimedias/Pizza-Time-v2)

###Technologies Used: 
VSCode, Javascript, HTML, css, Gitbash.

###Setup/Installation: 
Clone this repository to wherever you wish, then open index.html in your preferred web browser

###Known Bugs: 
Certain combinations will cause an invalid price cost, somehow sneaking by the .tofixed on line 34.

###License: 
Copyright 2022 Brett Roper

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Tests:

Testing: Pizza

Test 1: Pizza object should exist, and after creation should be able to list all of it's data

function Pizza(size, sauce, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.dressing = dressing;
    this.cost = 0;
  }

  new Pizza tp("mini", "red", ["cheese", "pepperoni"] "nothing")

  tp.size
  tp.sauce
  tp.toppings
  tp.dressing

  Expected Result: mini red cheese pepperoni nothing

  Test passed.

Testing: runapp()

Test 1: Order button should be able to be recognized

function runapp()
{
    const order = document.getElementById("Orderbtn");
}
typeof(order)

Expected Result: Button

Test failed
Reason: document wasn't loaded when order was being defined
Solution: Move document.getElementById to inside of function, and have runapp() called by a load event listener

Testing: Toggler

Test 1: Toggler should be able to make the classes visible/collasped as needed

Code:

  function toggler(element)
  {
    if(element.style.visibility  === "visible")
    {
        element.style.visibility  = "collapse";
        
    }else{
        element.style.visibility  = "visible";
    }
  }
toggler(sizeC)
toggler(mainC)

Expected result: hides the new pizza button, shows the size dropdown menu and the next button
Test failed
Reason: had CSS set to hide, which is different from visible/invisible
Solution: Fix the css lol

Testing sizestuff

Test 1: SizeL should be set to whatever the user selects

Code

  function sizeStuff()
  {
    //this giant line here just tells it how to get the thing it needs
      sizeL = document.getElementById("sizeI").options[document.getElementById("sizeI").selectedIndex].value;
      toggler(sizeC)
      toggler(sauceC)
  }
sizeL

Expected Result: mini
Test passed (this one actually worked first try. Was really suprised)

Testing: nope

Test 1: nope should delete toppings with nothing, and change the extra toppings into a single one instead of a duplicate

Pizza.prototype.nope = function()
{
        let newTop = []
        let lastTop = "n"
        for (let i = 0; i < this.toppings.length; i++)
        {
            if (this.toppings[i].charAt(0) === "N" && this.toppings[i].charAt(1) === "o")
            {
    
            }
            else if (this.toppings[i] === lastTop)
            {
                newTop.pop();
                
                newTop.push("Extra " + this.toppings[i])
            }
            else
            {
                newTop.push(this.toppings[i])
            }
        lastTop = this.toppings[i];
        }
    this.toppings = newTop;
}

new Pizza maddie = ("null", "null", ["Mozzerella", "Mozzerella", "Pepperoni", "No Meats", "No veggies", "No veggies"]);
Expected result ("Extra Cheese", "Pepperoni")
Test failed
Reason: newTop.pop not working
Solution: I just forgot the () at the end of the .pop

Testing: Sorter

Test 1: Sorter should correctly add commas and spaces

Pizza.prototype.sorter = function()
{
    let pizzaString = ""
    for(let i = 1; i < this.toppings.length; i++)
    {
            pizzaString = pizzaString.concat(this.toppings[i]);
            pizzaString += ", ";
    }
    toppings = pizzaString;
}

Expected result: Extra Mozzeralla, Pepperoni, Spicy Sausage, Extra Mushrooms
Test passed

Testing: Money 

Test 1: Should add 1 dollar per topping (extra only counts as one because I think that would be a good idea for a pizza store), charge a base cost of 3 dollars, and multiply based off of the size of the pizza

Pizza.prototype.money = function()
{
    let cash = parseInt(3);
    typeof(cash)

    cash += this.toppings.length;

    if (this.size === "Mini")
    {
        cash *= .75;
    }
    else if (this.size === "Mega")
    {
        cash *= 1.5;
    }
    else if (this.size === "Gluten Free")
    {
        cash *= 1.25;
    }
    cash *= 1.10
    
    this.cost = cash.toFixed(2);
}

pizza.size = Mega
pizza.toppings = ["extra mozzerella", "Pepperoni"]

Expected result: 7.50
test passed

Testing: Output

Test 1: Output should 
print out the users receit

function orderUp(allPizzas)
{
    let output = "You Ordered " + allPizzas.length + " Pizzas.";
    let price = 0
    let localP;

    for (let i = 0; i < (allPizzas.length); i++)
    {
        localP = workaround(allPizzas[i]);
        price += parseFloat(localP.cost);

        output = output + ("\n A " + localP.size + " " + localP.sauce + " pizza with " + localP.toppings + " and " + localP.dressing + " on top");
    }
    output += ("\n The total price is $" + price + "\n Thank you for dining with us.")
    document.getElementById("output").innerHTML = (output);
}

new Pizza E1 = ("mod", "red", ["Mozzerella", "Asiago", "Pepperoni", "Roasted Chicken", "No veggies"], "garlic")
new Pizza E2 = ("mega", "pesto", ["Mozzerella", "No Cheese", "No Meats", "Mushrooms", "Mushrooms"], "basil")

Expected Result:
You ordered 2 pizzas

A mod red sauce pizza with Mozzerella, Asiago, Pepperoni, Roasted Chicken and garlic on top
A mega pesto sauce pizza with Mozzerella, Extra Mushrooms, and basil on top

The total price is $14.50

Test failed
Reason: no brackets on allPizzas.length meant it was only running through the for loop once
Solution: add ()

