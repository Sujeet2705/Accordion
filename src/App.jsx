import Accordian from "./Components/accordianComponent.jsx";
import "./App.css";
import { data } from "./DummyData/data.js";

function App() {
  return (
    <div className="flex-container">
      <Accordian data={data} />
    </div>
  );
}

export default App;
