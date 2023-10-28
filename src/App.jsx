import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex flex-wrap">
        <PatientForm />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
