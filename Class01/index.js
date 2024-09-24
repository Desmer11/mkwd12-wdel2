console.log("Hello from NodeJS");

const greeting = "We are going to learn MERN";

console.log(greeting);

function greetings(message) {
  console.log(message);
}

greetings("Hello amigos!");

// DEFAULT IMPORT
import sumOfNumbers from "./calculation.js";
// NAMED IMPORT
import { filterMoviesByRating } from "./movies.service.js";

import { writeFile, appendFile, readFile } from "./fs.service.js"; // NAMED IMPORT

const arrayOfNumbers = [2, 5, 10, 15];
console.log(sumOfNumbers(arrayOfNumbers));

console.log("Hey node js is fun");
console.log("Can I see this message");

const movies = [
  { id: 1, title: "Harry Potter", rating: 5 },
  { id: 2, title: "Lord of the Rings", rating: 5 },
  { id: 3, title: "Fast and Furious", rating: 1 },
];

const filteredMovies = filterMoviesByRating(movies);
console.log(filteredMovies);

await writeFile("./my_file.txt", "Hello world");

await writeFile("./music/music.txt", "Scar Tissue - Red Hot Chilli Peppers");

const fileToRead = "new_file.txt";

await writeFile(fileToRead, "Will I throw error");
await writeFile(fileToRead, "This is new data in new_file.txt");

await appendFile(fileToRead, "\nAppended file");

const data = await readFile(fileToRead);

console.log(data);
