import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { AppContextProvider } from "./context/app.context";

function App() {
  return (
    <AppContextProvider>
      <ComponentA />
    </AppContextProvider>
  );
}

export default App;
