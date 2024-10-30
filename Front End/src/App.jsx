import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './login';


function App() {
     return(
     <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='home' element={<Home></Home>}></Route>

      </Routes>
    
     </BrowserRouter>
     
       </>
      
  )
}

export default App
