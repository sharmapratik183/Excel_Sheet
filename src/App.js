import logo from "./logo.svg";
import "./App.css";
import Upload from "./Components/Upload/Upload";
import Excel from "./Components/Excel/Excel";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Upload />
    </div>
  );
}

export default App;
