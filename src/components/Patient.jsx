import PropTypes from "prop-types";

const Patient = ({ patient, setPatient, deletePatient }) => {
  const { id, petName, ownerName, email, registerDate, symptoms } = patient;

  const handleDelete = () => {
    const response = confirm("¿Deseas eliminar este paciente?");
    if (response) {
      deletePatient(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{registerDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex flex-wrap justify-between md:justify-end md:space-x-4 mt-10">
        <button
          type="button"
          className="w-full my-2 md:w-1/4 py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="w-full my-2 md:w-1/4 py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.object,
  setPatient: PropTypes.func,
  deletePatient: PropTypes.func,
};

export default Patient;
