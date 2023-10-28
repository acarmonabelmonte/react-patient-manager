import Patient from "./Patient";
import PropTypes from "prop-types";

const PatientsList = ({ patients }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text font-bold">
              Pacientes y Citas
            </span>
          </p>
          {patients.map((patient) => (
            <Patient patient={patient} key={patient.id} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text font-bold">
              y aparecerán aquí
            </span>
          </p>
        </>
      )}
    </div>
  );
};

PatientsList.propTypes = {
  patients: PropTypes.array,
};

export default PatientsList;
