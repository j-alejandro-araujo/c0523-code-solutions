const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrices = prices.map((price) => {
  return { originalPrice: price, salePrice: price / 2 };
});

console.log(salePrices);

const formattedPrices = prices.map((price) => {
  return `$${price.toFixed(2)}`;
});

console.log(formattedPrices);
