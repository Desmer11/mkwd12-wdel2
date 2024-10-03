# Middlewares in Nodejs

### File: `index.ts`

```typescript
import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

// Custom middleware to log request information
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[LOG] ${req.method} - ${req.url}`);
  next(); // pass control to the next handler
};

// Middleware to add a custom header to responses
const headerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Custom-Header", "This is a custom header");
  next();
};

// Applying middlewares
app.use(loggerMiddleware);
app.use(headerMiddleware);

// Route handler
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world with middleware!");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## Explanation

### 1. Logger Middleware

The `loggerMiddleware` logs each request's method (e.g., GET, POST) and the URL path. This is useful for debugging or monitoring incoming requests.

```typescript
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[LOG] ${req.method} - ${req.url}`);
  next();
};
```

### 2. Header Middleware

This middleware adds a custom header (`X-Custom-Header`) to every response. You can use middlewares like this to modify the response before it’s sent back to the client.

```typescript
const headerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Custom-Header", "This is a custom header");
  next();
};
```

Remember that the order of middlewares matters, since the middleware is going to execute for the routes that are below itself.

## Conclusion

Middlewares are a powerful way to handle repeated logic across your application. You can use them to handle tasks like logging, authentication, error handling, and more.
