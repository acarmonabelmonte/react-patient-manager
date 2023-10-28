import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <PatientForm />
      <PatientsList />
    </div>
  );
}

export default App;
