import { useState } from 'react'
import './App.css'

function App() {
// use state hook notifies react that there is a change and trigger a re render
// set count function allows for the change a]of count value
const [count, setCount] = useState(0);

// increase function 
const increase = () => {
  // call set count function to increase count by 1 
  setCount(count + 1)
}
  return (
    <>
    <div>
      {count}
      <button onClick={increase}>increase</button>

    </div>
    </>
  );
};

export default App
