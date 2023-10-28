import { useState } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex flex-wrap">
        <PatientForm setPatients={setPatients} patients={patients} />
        <PatientsList patients={patients} />
      </div>
    </div>
  );
}

export default App;
