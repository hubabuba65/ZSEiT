import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";


function App() {

  const [data, setData] = useState([])
  console.log(data)

  return (
    <div>
      <Input data={data} setData={setData}/>
      <TodoList data={data} setData={setData}/>
    </div>
  );
}

export default App;
