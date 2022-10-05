import "./App.css";
import "./global.css";
import Menu from "./components/menu/Menu";
import Forside from "./components/Forside/Forside";

function App() {
  return (
    <div className="App flex">
      <Menu />
      <Forside />
    </div>
  );
}

export default App;
