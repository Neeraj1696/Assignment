import "./App.css";
import Header from "./Components/Header";

import Cards from "./Components/Cards";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* cart */}
      <Cards />
    </div>
  );
}

export default App;
