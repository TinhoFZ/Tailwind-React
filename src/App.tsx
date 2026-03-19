import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App