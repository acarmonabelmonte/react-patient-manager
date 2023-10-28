import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormError from "./FormError";

const PatientForm = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setRegisterDate(patient.registerDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    // Validations
    if ([petName, ownerName, email, registerDate, symptoms].includes("")) {
      setError(true);
    } else {
      const patientData = {
        petName,
        ownerName,
        email,
        registerDate,
        symptoms,
      };

      if (patient.id) {
        // Edit existing register
        patientData.id = patient.id;

        const updatedPatients = patients.map((patientState) =>
          patientState.id === patient.id ? patientData : patientState
        );

        setPatients(updatedPatients);
        setPatient({});
      } else {
        // Create new register
        patientData.id = generateId();

        setPatients([...patients, patientData]);
      }

      // Reset Form
      setPetName("");
      setOwnerName("");
      setEmail("");
      setRegisterDate("");
      setSymptoms("");
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text font-bold">
          Adminístralos
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <FormError message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            type="text"
            id="pet"
            name="pet"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            type="text"
            id="owner"
            name="owner"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            placeholder="Email contacto propietario"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="registerDate"
          >
            Fecha de Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="date"
            id="registerDate"
            name="registerDate"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 rounded-md"
            name="symptoms"
            id="symptoms"
            placeholder="Describe los síntomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 w-full text-white 
          uppercase font-bold p-3 hover:opacity-75 cursor-pointer transition-all"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

PatientForm.propTypes = {
  patients: PropTypes.array,
  setPatients: PropTypes.func,
  patient: PropTypes.object,
  setPatient: PropTypes.func,
};

export default PatientForm;
