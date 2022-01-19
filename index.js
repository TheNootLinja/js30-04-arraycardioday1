// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const q1Result = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log('Questions 1: ' + q1Result);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const q2Result = inventors.map(
  (inventor) => `${inventor.first + ' ' + inventor.last}`
);
console.log('Question 2: ' + q2Result);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const q3Result = inventors.sort((a, b) => {
  return a.year - b.year;
});
console.log('Question 3: ' + q3Result);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const q4Result = inventors.reduce((currTot, inventor) => {
  return currTot + (inventor.passed - inventor.year);
}, 0);
console.log('Question 4: ' + q4Result);
// 5. Sort the inventors by years lived
const q5Result = inventors.sort((a, b) => {
  const invA = a.passed - a.year;
  const invB = b.passed - b.year;
  return invA > invB ? -1 : 1;
});
console.table(q5Result);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const parentDiv = document.querySelector('.mw-category');
// const childLinks = parentDiv.querySelectorAll('a');
// const linksArr = [...childLinks];
// const deNames = linksArr
//   .map((link) => link.textContent)
//   .filter((name) => name.includes('de'));
// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeopleLast = people.sort((a, b) => {
  const aName = a.split(', ');
  const bName = b.split(', ');
  return aName[0] > bName[0] ? 1 : aName[0] < bName[0] ? -1 : 0;
});
console.table(sortPeopleLast);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const instanceCount = data.reduce((obj, currTranspo) => {
  if (!obj[currTranspo]) {
    obj[currTranspo] = 0;
  }
  obj[currTranspo]++;
  return obj;
}, {});
console.table(instanceCount);
