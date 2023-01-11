
const Patient = ({patient, setPatient, deletePatient}) => {

  const {id, name, owner, email, entryDate, symptom} = patient;
  
  const handleDelete = () => {
    const answer = confirm('Are you sure you want to delete this register?');

    if (answer) {
      deletePatient(id);
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Pet name: {''}
          <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Owner name: {''}
          <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Entry date: {''}
          <span className="font-normal normal-case">{entryDate}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Symptom: {''}
          <span className="font-normal normal-case">{symptom}</span>
        </p>
        
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-bold"
            onClick={() => setPatient(patient)}
          >Edit</button>
          <button
            type="button"
            className="py-2 px-10 bg-red-800 hover:bg-red-900 rounded-md text-white font-bold"
            onClick={handleDelete}
          >Delete</button>
        </div>
      </div>
  )
}

export default Patient