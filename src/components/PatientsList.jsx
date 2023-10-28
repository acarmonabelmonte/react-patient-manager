import Patient from "./Patient";

const PatientsList = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text font-bold">
          Pacientes y Citas
        </span>
      </p>
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
};

export default PatientsList;
