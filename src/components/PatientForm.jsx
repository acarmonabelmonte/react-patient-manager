const PatientForm = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text font-bold">
          Adminístralos
        </span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 w-full text-white 
          uppercase font-bold p-3 hover:opacity-75 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default PatientForm;
