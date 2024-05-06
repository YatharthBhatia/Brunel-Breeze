import React from 'react'

export default function Registrations() {
  return (
    <>
    <div>
      <div className='mx-52 my-32'>
        <div>
          <p>Brunel</p>
        </div>
        <div classname="rounded-full">
          <p>cross</p>
        </div>
      </div>
      <div>
        <div className='mb-16'>
          <p>Registration Form</p>
          <p>Start your success Journey here!</p>
        </div>
        <div className='flex-col justify-center space-y-4'>
          <div>
          <input className="py-6 pl-8 bg-slate-100 rounded-full" placeholder='Enter your name'></input>
          </div>
          <div>
          <input className="py-6 pl-8 bg-slate-100 rounded-full" placeholder='Enter your email'></input>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </>
    
  )
}
