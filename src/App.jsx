import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';

function App() {


  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<HomePage/>}/> 
        <Route path="/testing" element={<Testing/>}/> 





       



      </Routes>
   </BrowserRouter>
  )
}

export default App
