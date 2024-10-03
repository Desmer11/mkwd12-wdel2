# Mongoose API Example with Connection Method

## File: `index.ts`

```typescript
import express, { Request, Response } from "express";
import mongoose, { Schema, model, Document } from "mongoose";

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the interface for a User document
// Note: It is not mendatory to extend from Document, like we did in class.
interface IUser extends Document {
  name: string;
  email: string;
  age: number;
}

// Define a schema for the User model
// required: true means that this prop must be defined when we save it into the db, meaning the db will make validation also.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

// Create a model based on the schema
const User = model<IUser>("User", userSchema);

// Function to connect to MongoDB
const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {
      dbName: "My DB",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Route to create a new user
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    const newUser = new User({
      name,
      email,
      age,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Route to fetch all users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Route to delete a user by ID
app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Start the server and connect to MongoDB
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await connectToMongo(); // Connect to MongoDB when the server starts
});
```

### Explanation

1. **Connection Method**: The `connectToMongo` function handles connecting to MongoDB. It is called after the server starts to ensure the connection is established before handling requests.

2. **APIs**:

   - **POST `/users`**: This endpoint accepts a JSON request body to create a new user in the MongoDB database.
   - **GET `/users`**: This endpoint fetches all users from the MongoDB database.
   - **DELETE `/users/:id`**: This endpoint deletes a user by their ID from the MongoDB database.

3. **Error Handling**: Basic error handling is in place for database operations. If something goes wrong, the server responds with a `500` status and a corresponding error message.

4. **Middleware**: The `express.json()` middleware is used to parse incoming JSON request bodies, so the API can handle data sent from the client.

### Running the Example

To run this example:

1. Ensure you have MongoDB running locally or provide a connection string to a remote MongoDB instance.
2. Install dependencies:

```bash
npm install express mongoose @types/express @types/mongoose typescript ts-node-dev nodemon --save-dev
```

3. Start the server:

```bash
nodemon index.ts
```

Now you can make requests to the API:

- **Create User**: POST request to `/users` with a JSON body like:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
  ```
- **Get Users**: GET request to `/users`
- **Delete User**: DELETE request to `/users/:id` where `:id` is the user's ID.
