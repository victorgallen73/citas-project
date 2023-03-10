import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  useEffect( () => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter( patientState => patientState?.id !== id);
    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          patient={patient}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div> 
    </div>
  )
}

export default App
