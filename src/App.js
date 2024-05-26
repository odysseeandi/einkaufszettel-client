import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, deleteToDoHandel, updateToDoHandel } from "./utils/HandleApi";

function App() {

  const [getToDo, setToDo] = useState([])
  const [getText, setText] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Einkaufszettel</h1>
      
        <div className="top">
          <input
          type="text"
          placeholder="Add something.."
          value={getText}
          onChange={(e) => setText(e.target.value)}/>
          <div className="add" onClick={() => (getText) && addToDo(getText, setText, setToDo)}>Add</div>
        </div>
        <div className="list">

          {getToDo.map((item) => <ToDo
          key={item._id}
          text={item.text}
          doneToDo={item.done}
          deleteToDo = {() => deleteToDoHandel(item._id, setToDo)} 
          updateMode = {() => updateToDoHandel(item._id, setToDo)} 
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;