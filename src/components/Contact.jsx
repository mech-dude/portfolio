import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-12'>
      <form action="https://getform.io/f/ff58095b-dd3a-41ca-b361-b923093123f4" method="POST" className='flex flex-col max-w-[600px] w-full h-screen pt-32 pb-8 justify-center items-center'>
        <div className='py-8'>
            <p className='text-xl font-bold flex text-white justify-center items-center'>Contact</p>
        </div>
        <input className="my-4 rounded-md h-auto w-full text-white p-2 text-3xl" type="text"  name='name'  placeholder='Name'  required/>
        <input className='rounded-md h-auto w-full text-white p-2 text-3xl' type="email" name="email" placeholder='Email'      required/>
        <div class="w-full lg:w-1/2 mx-auto"></div>
        <textarea className="w-full p-2 mt-4  rounded-lg  text-3xl" name="message" rows="10"  placeholder="Enter your message here..." required></textarea>
        <div class="w-full lg:w-1/2 mx-auto"></div>
        <button className="inline-block min-[412px]:w-[240px] max-[400px]:w-full bg-transparent p-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 mt-4 px-4 border border-white hover:border-transparent rounded text-3xl" type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
