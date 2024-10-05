import "./App.css";
import MovieInfo from "./components/MovieInfo";
import { Header } from "./components/Header";
import Parent from "./components/Parent";

// App is a FUNCTIONAL COMPONENT, since it it's return statement, returns HTML looking like code called JSX/TSX (Javascript & XML / Typescript & XML)
// JSX (Using TS we can refer to it as TSX)
function App() {
  const studentName = "John Doe";
  const academyName = "Web Development";

  const fullName = () => {
    return "Bob Bobski";
  };

  return (
    <>
      <Header />
      <h1> -- JSX --</h1>

      <main>
        <h3>Welcome student, {studentName}</h3>
        <p>
          {studentName} is attending {academyName}.
        </p>
        <p>Todays date is: {new Date().toDateString()}</p>
        <p>{fullName()}</p>

        <MovieInfo />
      </main>

      <h1> -- PARENT - CHILD --</h1>
      <Parent />
    </>
  );

  const welcomingMessage = "Welcome"; // Unreachable code
}

export default App;
