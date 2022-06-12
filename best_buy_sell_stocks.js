// Prompt:
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

const maxProfit = prices => {
  let min = Infinity;
  let res = 0;
  
  for (let i = 0; i < prices.length; i++) {
      let curr = prices[i];
      if (curr < min) {
          min = curr;
      } else if (curr - min > res) {
          if (i > prices.indexOf(min)) res = curr - min;
      }
  }
  return res;
};

let prices = [7,1,5,3,6,4]
console.log( maxProfit(prices) ); // 5
prices = [7,6,4,3,1]
console.log( maxProfit(prices) ); // 0