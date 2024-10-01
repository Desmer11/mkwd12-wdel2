import express from "express";
import { timeOfRequest } from "./middlewares/logging";
import budgetRouter from "./routes/budget.router";

const app = express();

app.use(express.json()); // Our app will know how to parse/proccess json request body.

// Global middleware
app.use((req, res, next) => {
  console.log(
    "I am in global middleware, and intercept all requests for all routes"
  );

  next(); // It let's the REQUEST to procceed
});

// Middleware that is declared in another file and used in app.ts
app.use(timeOfRequest);

// Default route => localhost:3000
app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use(budgetRouter);

app.listen(3000, () => {
  console.log("Saying is up and running...");
});
