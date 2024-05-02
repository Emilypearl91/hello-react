import { useEffect, useState,} from 'react'
import Axios  from 'axios';
import './App.css'

function App() {
const [catFact , setCatFact] = useState("");
 const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
  setCatFact(res.data.fact);
 });
}
useEffect(() => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
  setCatFact(res.data.fact);
});
}, [])


  return (
    <>
  <p>{catFact}</p>
  <button onClick={fetchCatFact}>Generate Cat Fact</button>
    </>
  );
};

export default App
