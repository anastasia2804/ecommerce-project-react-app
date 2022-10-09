import './App.css';

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<h1>homepage</h1>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
      
    </div>
  );
}

export default App;
