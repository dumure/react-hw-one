import { useState } from 'react';
import './App.css';
import DisplayCountClick from "./components/DisplayCountClick/DisplayCountClick";
import UpdateCountClick from "./components/UpdateCountClick/UpdateCountClick";

function App() {
  const [countClick, setCountClick] = useState(0);
  return (
      <div>
            <DisplayCountClick count={countClick} />
          <br />
            <UpdateCountClick count={countClick} setCount={setCountClick} />
      </div>
  )
}

export default App;
