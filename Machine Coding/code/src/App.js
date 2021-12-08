import "./App.css";
import Timer from "./Problems/Timer/Timer";
import useToast from "./Problems/Toast/useToast";

function App() {
  const { showToast } = useToast();

  return (
    <div className="App">
      <Timer />
      <button onClick={showToast}> Show Toast</button>
    </div>
  );
}

export default App;
