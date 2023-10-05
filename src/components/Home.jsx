import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
 return (
  <section className="sec" id="home">
      <div className='w-full h-screen'> 
            <div className='blob'></div>
              <div className='max-w-[1000px] mx-auto px-8 flex flex-col align-center justify-center h-full text-white'>
              <h2 className='text-5xl sm:text-6xl font-bold pr-4'>Hi there, my name is</h2>
              <h1 className='text-4xl sm:text-6xl font-bold text-[#ffd900]'>Juan Victoria</h1>
              <div className='flex flex-wrap'>
                <h2 className='text-4xl sm:text-6xl font-bold pr-4'>I'm</h2>
                <TypeAnimation className='text-4xl sm:text-6xl font-bold' sequence={[
                  'an Engineer',
                  2000,
                  'a Manager',
                  2000,
                  'a Front-end Developer.'
                ]}
                wrapper='div'
                speed={20}   
                deletionSpeed={20}
                repeat={Infinity}
                omitDeletionAnimation={false}
                />
              </div>
          </div>
      </div> 
    </section>
  )
}

export default Home
