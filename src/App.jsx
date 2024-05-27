import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import Header from "./Header/header"

import Table from './Table/table';
import AddUser from './Table/addUser';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/EditUser" element={<AddUser />} />
      </Routes>
    
    </>
  )
}

export default App
