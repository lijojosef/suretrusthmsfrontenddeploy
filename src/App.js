import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Home from './pages/Home';
// import Navbar from './layout/navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LandingPage from "./components/LandingPage/landingpage.js";
//import LandingPage from "./components/DoctorConsultationFees/drfees.js";
import AdminLogin from "./components/AdminLogin/adminlogin.js";
import DoctorLogin from "./components/DoctorLogin/doctorlogin.js";
import PatientLogin from "./components/PatientLogin/patientlogin.js";

import AddDrug from "./components/PharmacyManagement/DrugOperation/AddDrug/AddDrug";
import DrugSearch from "./components/PharmacyManagement/DrugOperation/SearchDrug/Search";
import UpdateDrug from "./components/PharmacyManagement/DrugOperation/UpdateDrug/UpdateDrug";
import Billing from "./components/PharmacyManagement/Billing/Billing";
import Expiry from "./components/PharmacyManagement/Billing/Billing";
import PharmacyHome from "./components/PharmacyManagement/Home/PharmacyHome";

{
  /*Arindam */
}
import EmpReg from "./components/EmployeeRegistration/empreg.js";
import SalaryCalculator from "./components/SalaryCalculator/salarycalc.js";
import PaySlip from "./components/PaySlip/payslip.js";
import EmployeeManagement from "./components/EmployeeManagement/empmgmt.js";
import EmpList from "./components/EmployeeManagement/viewemplist.js";
import AfterAdminL from "./components/AfterAdminL/afteradminl.js";
import EmpAndSal from "./components/homepage/home.js";

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

          <Route path="/pharmacyHome" element={<PharmacyHome />} />
          <Route path="/addDrug" element={<AddDrug />} />
          <Route path="/updateDrug/:id" element={<UpdateDrug />} />
          <Route path="/drugSearch" element={<DrugSearch />} />
          <Route path="/bill" element={<Billing />} />
          {/* <Route path='/expiry' element={<Expiry/>} /> */}

          {/*added by lijo for testing*/}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/doctorlogin" element={<DoctorLogin />} />
          <Route exact path="/patientlogin" element={<PatientLogin />} />

          {/*Arindam */}
          <Route path="/home" element={<EmpAndSal />} />
          <Route path="/empreg" element={<EmpReg />} />
          <Route path="/salarycalc" element={<SalaryCalculator />} />
          <Route path="/payslip" element={<PaySlip />} />
          <Route path="/empmgmt" element={<EmployeeManagement />} />
          <Route path="/viewemplist" component={EmpList} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
