import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Chat from './Components/Chat';
import Error404 from './Components/Eror404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
