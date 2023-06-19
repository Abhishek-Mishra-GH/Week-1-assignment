/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let rv = [];

  for(let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let spent = transactions[i].price;
    let isPresentAt = isCategoryPresent(category);
    if (isPresentAt == -1) createNewCategory(category, spent);
    else {
      rv[isPresentAt].totalSpent += spent;
    }
  }

  function isCategoryPresent(cat) {
    for(let i = 0; i < rv.length; i++) {
      if(rv[i].category == cat) {
        return i;
        break;
      }
    }

    return -1;
  }

  function createNewCategory(cat, spent) {
    let obj = {
      category: cat,
      totalSpent: spent
    };

    rv.push(obj);
  }

  return rv;
}

module.exports = calculateTotalSpentByCategory;
