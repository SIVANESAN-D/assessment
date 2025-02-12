import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Home'
import RegistrationForm from './components/RegistrationForm';
import Payment from './components/Payment';
import { Routes,Route } from 'react-router-dom';

import Verity from './components/Verity';

function App() {
  return (
    
    <div className="App">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<RegistrationForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/variety" element={<Verity />} />
      </Routes>
    </div>

  );
}

export default App;
