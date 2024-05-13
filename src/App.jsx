import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home';
function App() {

  return (
 <>
 <BrowserRouter>
 <div><Link to='/'> Home</Link></div>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 </BrowserRouter>
 </>
  );
};

export default App
