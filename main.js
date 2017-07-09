// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      data[i]
      sum = sum + data[i].price ;
  }
  let average = sum / data.length
  return "The average is $" + average.toFixed(2)
  // Answer:
}
console.log(question1())


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD ---FYI for question #2 in the weekly project, I’ve just confirmed with @gavin that you don’t need to consider the `currency_code` even though it appears that you probably should given that the question implies USD
function question2 () {
  let cheap = []
  for (let i = 0; i < data.length; i++) {
    let prices = data[i].price
    let title = data[i].title
    if (prices >= 14.00 && prices <= 18.00)  {
      cheap.push(title)
    }

  }
    return cheap
}

console.log(question2())


  // Answer:

// if price is 14 < 18, print title


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
