/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SingleBook from './Components/SingleBook';
import Login from './Components/Login';
import Register from './Components/Register';
import { DashboardLayout } from './dashboard/DashboardLayout';
import { useLocation } from 'react-router-dom';
import { Uploadbook } from './dashboard/Uploadbook';
import { Managebook } from './dashboard/Managebook';

function Main() {
  const location = useLocation();
  const hideOnRoutes = ["/login", "/register"]
  return (
    <>
    {!hideOnRoutes.includes(location.pathname)&& <Navbar/>}
        
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/singlebook" element={<SingleBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<DashboardLayout />}>
              <Route path="/admin/dashboard/manage" element={<Managebook/>}/>
              <Route path="/admin/dashboard/upload" element={<Uploadbook/>}/>

              </Route>
          </Routes>
        
    </>
  );
}

function App() {
  return (

  <Router>
    <Main />
  </Router>
  );
}

export default App;
