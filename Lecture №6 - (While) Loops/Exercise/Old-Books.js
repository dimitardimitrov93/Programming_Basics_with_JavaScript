function solve(input) {
  let bookTarget = input.shift();
  let booksInLibrary = Number(input.shift());
  let currentBook = input.shift();
  let counter = 0;

  while (currentBook != bookTarget && counter < booksInLibrary) {
    currentBook = input.shift();
    counter++;
  }

  if (currentBook == bookTarget) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
  }
}

solve([ 
"Troy",
"8",
"Stronger",
"Life Style",
"Troy"
]);

solve([
 "The Spot",
 "4",
 "Hunger Games",
 "Harry Potter",
 "Torronto",
 "Spotify"
]);

solve([
  "Bourne",
  "32",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);

