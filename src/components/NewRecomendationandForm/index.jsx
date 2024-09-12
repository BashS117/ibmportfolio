import { useState,useEffect } from 'react'

export default function NewRecomendationAndForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submittedMessages, setSubmittedMessages] = useState([])
  const [showAlert,setShowAlert]= useState(false)

  useEffect(() => {
    if (showAlert) {setTimeout(() => {
        alert('Thank you for submitting a recommendation!')

    }, 0);
      setShowAlert(false) // Resetea para no mostrar el alert nuevamente
    }
  }, [showAlert])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && message) {
      setSubmittedMessages([...submittedMessages, { name, message }])
      setName('')
      setMessage('')
      setShowAlert(true)

    }
  }

  return (
    <div className='mt-0'>
                {submittedMessages.length > 0 && (
        <div className="px-[100px]">
          <div className="grid grid-cols-3 gap-4 px-[60px]  "> 
            {submittedMessages.map((msg, index) => (
              <p
                key={index}
                className="border-[#e5e7eb] border-[2px] rounded-[6px] font-bold text-[14px] break-words text-start p-4"
              >
                "{msg.message}"
                {/* - <span className="text-sm font-normal text-gray-600">{msg.name}</span> */}
              </p>
            ))}
          </div>
        </div>
      )}


    <div className="w-full  px-[350px] ">
      <div className=" rounded-lg text-start p-4">
        <div className="mb-4">
          <h2 className="text-[20px] font-semibold">Leave a Recommendation</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
          <div className="space-y-2 w-full">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (Optional)"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="space-y-2 w-full  ">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full p-2 border rounded-md"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className=" py-[8px] px-14 font-bold hover:bg-purple-700 hover:text-white text-purple-700 rounded-md border-purple-700 "
          >
            Submit
          </button>
        </form>
      </div>


</div>
<div className='flex justify-end pr-20'>
    
<svg
    onClick={()=>{ window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animación suave al hacer scroll
      })}}
  xmlns="http://www.w3.org/2000/svg" fill="#7e22ce" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
    </div>
  )
}
