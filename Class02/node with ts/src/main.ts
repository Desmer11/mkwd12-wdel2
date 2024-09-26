import { log } from "./services/logging.service";
import express from "express";
import { Movie } from "./types/movie.interface";

const DUMMY_DATA: Movie[] = [
  { id: "1", title: "John Wick", genre: "Action" },
  { id: "2", title: "John English", genre: "Comedy" },
  { id: "3", title: "Spy Kids", genre: "Kids" },
];

const server = express();

// this ENDPOINT is going to accessed with the HTTP method GET
// localhost:3000
server.get("/", (request, response) => {
  console.log(request.url);
  console.log(request.originalUrl);
  console.log(request.method);
  /**
   * request => INCOMING REQUEST MADE TO THIS ENDPOINT
   * response => WE CAN RETURN SOMETHING BACK TO THE USER, AS ANSWER TO THIS REQUEST
   */

  response.send("Hello world");
});

// localhost:3000/movies
server.get("/movies", (request, response) => {
  response.send(DUMMY_DATA);
});

server.get("/error", (request, response) => {
  try {
    console.log("TRY");
    throw new Error(
      JSON.stringify({ message: "Entity not found", statusCode: 404 })
    );
  } catch (error: any) {
    console.log("CATCH");
    console.log(error);
    const parsedError = JSON.parse(error.message);
    console.log(parsedError);
    if (parsedError.statusCode === 404) {
      response.status(404).send({ message: "Entity not found" });
    }

    throw new Error(error);
  }

  response.send("response ");
});

server.listen(3000, () => {
  console.log("Server is up and running");
});
