import { useEffect, useState } from "react";
import Heading from "./components/Heading/Heading";
import TodoList from "./components/TodoList/TodoList";
import axios from "axios";
import AddingElements from "./components/AddingElementsForm/AddingElements";

const App = () => {
  // ======================================================================
  // Below hook is to get the data from the backend and save within an array
  const [ComingData, setComingData] = useState([]);
  // Below hook responisble for taking the input value and send it to server.js
  const [GettingFrontendText, setGettingFrontendText] = useState("");
  // Below hook responsible for making the adding element interface appear
  const [State, setState] = useState(false);

  // ======================================================================
  // The Below Functions takes the URL of the backend to send, and get the data.
  // [ 1 ] "onGetting" function does take the URL with "/read" which means getting the data from the backend and display them in the frontend.
  // [ 2 ] "SendData" function does take the URL with "/posting", which means the opposite, taking the data from the frontend and send it to the backend to be saved.
  // ======================================================================
  // "onGetting" function is to display the data of the backend
  const onGetting = () => {
    axios
      .get("https://calm-brook-00888.herokuapp.com/todo/read")
      .then((response) => setComingData(response.data));
  };
  // When the page loaded, the data immedtaly displayed
  useEffect(() => {
    onGetting();
  }, []);
  // ======================================================================
  // ======================================================================
  // Getting the "GettingFormatText", and send it server.js as variable "text"
  // Retrieving the data again from backend by "onGetting"
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
  // Detecing the item we want to remove by getting the box's ID (backend ID) and send it to the server.js
  // The data will come out again to be displayed by calling "onGetting()" function.
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
  // Detecing the item we want to remove by getting the box's ID (backend ID) and send it to the server.js
  // The data will come out again to be displayed by calling "onGetting()" function.
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
