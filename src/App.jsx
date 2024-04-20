import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './User'

function App() {
 const isPink = true;
 const users = [
  {name:'jaclyn', age:21},
  {name:'aelin', age:3}
];
  return (
    <>
    {/* used map function to display each user  */}
    {users.map((user,key) => {
      return <User name={user.name} age={user.age} key={key}/>
})}
 {/* using inline css and the isPink variable to change the color of the text*/}
    <h1 style={{color: isPink ? 'pink' : 'blue'}}>ternary operators and css</h1>
    </>
  );
};

const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  )
}

export default App
