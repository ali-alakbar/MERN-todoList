import { useEffect, useState } from "react";
import Heading from "./components/Heading/Heading";
import TodoList from "./components/TodoList/TodoList";
import axios from "axios";
import AddingElements from "./components/AddingElementsForm/AddingElements";

const App = () => {
  // ======================================================================
  const [ComingData, setComingData] = useState([]);
  const [GettingFrontendText, setGettingFrontendText] = useState("");
  const [State, setState] = useState(false);

  // ======================================================================
  // ======================================================================
  const onGetting = () => {
    axios
      .get("http://localhost:3001/todo/read")
      .then((response) => setComingData(response.data));
  };
  useEffect(() => {
    onGetting();
  }, []);
  // ======================================================================
  // ======================================================================

  const SendData = () => {
    axios
      .post("http://localhost:3001/todo/posting", {
        text: GettingFrontendText,
      })
      .then(() => {
        setState(false);
        onGetting();
      });
  };

  // ======================================================================
  // ======================================================================
  const onUpdate = (paraID, paraComplete) => {
    axios
      .post("http://localhost:3001/todo/update", {
        id: paraID,
        complete: paraComplete,
      })
      .then(() => onGetting());
  };
  // ======================================================================
  // ======================================================================
  const onRemove = (paraID) => {
    axios
      .post("http://localhost:3001/todo/remove", {
        id: paraID,
      })
      .then(() => onGetting());
  };
  // ======================================================================
  // ======================================================================

  return (
    <div className="App">
      <div className="container">
        <Heading />
        <TodoList onRemove={onRemove} onUpdate={onUpdate} Data={ComingData} />
      </div>
      <AddingElements
        SendData={SendData}
        setGettingFrontendText={setGettingFrontendText}
        State={State}
        setState={setState}
      />
    </div>
  );
};

export default App;
