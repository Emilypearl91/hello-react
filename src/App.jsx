import { useState,} from 'react'
import './App.css'

function App() {
fetch('https://catfact.ninja/fact')
.then((res) => res.json())
.then((data) => {
console.log(data);
});
  return (
    <>
  
    </>
  );
};

export default App
