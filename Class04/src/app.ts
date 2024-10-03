import express from "express";
import { timeOfRequest } from "./middlewares/logging";
import budgetRouter from "./routes/budget.router";
import { connect } from "./db/database";

const app = express();

app.use(express.json()); // Our app will know how to parse/proccess json request body.

// Middleware that is declared in another file and used in app.ts
app.use(timeOfRequest);

// Default route => localhost:3000
app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use(budgetRouter);

app.listen(3000, async () => {
  console.log("Saying is up and running...");
  await connect();
});

// AfHqaNxbhIkxJMs0
