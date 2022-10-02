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
      .get("https://calm-brook-00888.herokuapp.com/todo/read")
      .then((response) => setComingData(response.data));
  };
  useEffect(() => {
    onGetting();
  }, []);
  // ======================================================================
  // ======================================================================

  const SendData = () => {
    axios
      .post("https://calm-brook-00888.herokuapp.com/todo/posting", {
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
      .post("https://calm-brook-00888.herokuapp.com/todo/update", {
        id: paraID,
        complete: paraComplete,
      })
      .then(() => onGetting());
  };
  // ======================================================================
  // ======================================================================
  const onRemove = (paraID) => {
    axios
      .post("https://calm-brook-00888.herokuapp.com/todo/remove", {
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
