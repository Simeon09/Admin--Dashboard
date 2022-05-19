
import './App.css';
import Login from './Component/Login/Login';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
