import "./App.css";
import Timer from "./Problems/Timer/Timer";
import useToast2 from "./Problems/Toast/useToast2";

function App() {
  const { showToast } = useToast2();

  return (
    <div className="App">
      <Timer />
      <button onClick={() => showToast("Hello")}> Show Toast</button>
    </div>
  );
}

export default App;
