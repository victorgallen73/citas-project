
const Patient = ({patient}) => {

  const {name, owner, email, entryDate, symptom} = patient;
  
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
      </div>
  )
}

export default Patient