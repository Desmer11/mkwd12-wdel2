## Homework Challenge: Build a Simple Counter App with React and `useState`

### Objective:

Create a basic counter app using React and the `useState` hook to practice managing state in functional components.

### Instructions:

1. **Create a New React App:**

   - Initialize a new React app or use an existing project.
   - You can use either `Create React App` or `Vite` if you're familiar with it.

2. **Build the Counter Component:**

   - Create a functional component called `Counter`.
   - Inside this component, use the `useState` hook to manage a state variable called `count` (which starts at 0).
   - Render the current value of `count` on the screen.

3. **Add Buttons to Increment and Decrement:**

   - Add two buttons below the displayed `count`:
     - One button should increment the `count` by 1 when clicked.
     - The other button should decrement the `count` by 1 when clicked.
   - Make sure the `count` cannot go below 0 (minimum value is 0).

4. **Add a Reset Button:**

   - Add a third button that resets the `count` back to 0 when clicked.

5. **Odd/Even Message:**

- Add a message that changes when the `count` is an even or odd number. For example, display "Even Number" when `count` is even and "Odd Number" when `count` is odd.

### Example Output:

```
Count: 3

[ + ]  [ - ]  [ Reset ]

Odd Number
```
