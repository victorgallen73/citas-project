
const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Add Patient and {''}
          <span className="text-indigo-600 font-bold">Manage it</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet name
            </label>
            <input
              id="pet" 
              type="text"
              placeholder="Name of the pet"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner name
            </label>
            <input
              id="owner" 
              type="text"
              placeholder="Name of the owner"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input
              id="email" 
              type="email"
              placeholder="Owner contact email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="entryDate" className="block text-gray-700 uppercase font-bold">
              Entry date
            </label>
            <input
              id="entryDate" 
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">
              Symptom
            </label>
            <textarea
            id="symptom"
            placeholder="Symptom description"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
            value="Add patient"
          />
        </form>
    </div>
  )
}

export default Form;