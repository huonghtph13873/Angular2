import React ,{useState} from 'react'
import './App.css';
function App() {
  const[status,setStatus] =useState(false)
  return <button onClick={() =>setStatus(!status)}>{status? "You love it" : "love it 1"}</button>
}
export default App;