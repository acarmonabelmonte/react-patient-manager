import { useState } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex flex-wrap">
        <PatientForm
          setPatients={setPatients}
          patients={patients}
          setPatient={setPatient}
          patient={patient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
