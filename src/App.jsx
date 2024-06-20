import "./App.css";
import Footer from "./components/Footer";
import Admin from "./components/Statstics/Admin";
import AllStats from "./components/Statstics/AllStats";
import Navbar from "./components/Statstics/Navbar";
import Payout from "./components/Statstics/Payout";
import Sidebar from "./components/Statstics/Sidebar";
import Customers from "./components/Statstics/Customers";
import Transactions from "./components/Statstics/Transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Admin />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AllStats />} />
          <Route path="/Payout" element={<Payout />} />
          <Route path="/Customers" element={<Customers />}/>
          <Route path="/Transactions" element={<Transactions />}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;