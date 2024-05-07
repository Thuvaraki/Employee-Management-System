import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
