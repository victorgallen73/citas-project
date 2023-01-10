
const Patient = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Pet name: {''}
          <span className="font-normal normal-case">Nubba</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Owner name: {''}
          <span className="font-normal normal-case">Victor</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
          <span className="font-normal normal-case">victor@email.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Entry date: {''}
          <span className="font-normal normal-case">10/12/2019</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Symptom: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vero excepturi dolores corrupti fugiat facere dolorum! Ad, aliquid excepturi id recusandae corrupti quos,
            sint, culpa nobis delectus ipsum voluptatem pariatur repellat.
          </span>
        </p>
      </div>
  )
}

export default Patient