// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise 1: ForEach Basics
// Log each name
names.forEach(name => console.log(name));

// Log each province
provinces.forEach(province => console.log(province));

// Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Exercise 2: Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Exercise 3: Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 4: Sorting
const sortedProvinces = [...provinces].sort(); // Copy array to avoid mutating the original
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// Exercise 6: Finding 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// Exercise 7: Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises (Single `console.log` Execution)

// 1. Log Products
console.log(products.forEach(product => console.log(product.product)));

// 2. Filter by Name Length
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
console.log(
  products
    .filter(product => String(product.price).trim() !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
);

// 4. Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product, ''));

// 5. Find Extremes in Prices
const validProducts = products.filter(product => String(product.price).trim() !== '').map(product => ({ ...product, price: Number(product.price) }));
const highestPricedProduct = validProducts.reduce((max, product) => (product.price > max.price ? product : max), validProducts[0]);
const lowestPricedProduct = validProducts.reduce((min, product) => (product.price < min.price ? product : min), validProducts[0]);
console.log(`Highest: ${highestPricedProduct.product}. Lowest: ${lowestPricedProduct.product}`);

// 6. Object Transformation
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc[product] = { name: product, cost: price };
  return acc;
}, {});
console.log(transformedProducts);

const styles = [
  'background: linear-gradient(#D33106, #571402)',
  'border: 1px solid #3E0E02',
  'color: white',
  'display: block',
  'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
  'box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
  'padding: 20px',
  'line-height: 40px',
  'text-align: center',
  'font-weight: bold',
  'font-size: 20px'
].join(';');

console.log('%c DJS06 ', styles);

console.log('%cJs successfully loaded.', 'color: green; font-size: 16px; font-weight: bold;');
console.log('%cCelso Charlez', 'color: blue; font-size: 14px;');

// Small console log for coolness :)
