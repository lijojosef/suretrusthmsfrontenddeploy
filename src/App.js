import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Home from './pages/Home';
// import Navbar from './layout/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddUser from './users/AddUser';
// import EditUser from './users/EditUser';
// import ViewUser from "./users/ViewUser";
import LandingPage from "./components/LandingPage/landingpage.js";
import AdminLogin from "./components/AdminLogin/adminlogin.js";
import DoctorLogin from "./components/DoctorLogin/doctorlogin.js";
import PatientLogin from "./components/PatientLogin/patientlogin.js";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}

        <Routes>
          {/*<Route exact path="/" element={<Home />}/> 
          <Route exact path="/adduser" element={<AddUser />}/>
          <Route exact path="/edituser/:id" element={<EditUser />}/>
          <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}

          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/doctorlogin" element={<DoctorLogin />} />
          <Route exact path="/patientlogin" element={<PatientLogin />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
