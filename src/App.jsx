import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* user component with props */}
    <User name='emily' age={20} email='emily@email.com'/>
    </>
  );
};
// js props object
const props = {
  name:'emily',
  age:20 ,
  email: 'emily@email.com'

};
// component must have a capital letter 
// pass props object as a parameter 
function User(props){

  return (
<div>
  <h1>{props.name}</h1>
  <h1>{props.age}</h1>
  <h1>{props.email}</h1>
</div>
);
};
export default App
