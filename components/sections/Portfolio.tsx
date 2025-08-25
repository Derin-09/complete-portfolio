import React, { useState } from 'react'
import Beginning from './Beginning'
import About from './About'
import Inspirations from './Inspirations'
import Stacks from './Stacks'
import Projects from './Projects'
import Services from './Services'
import Experience from './Experience'
import Feedbacks from './Feedbacks'
import Hobbies from './Hobbies'
import Contact from './Contact'

const Portfolio = () => {

  return (
    <main className='md:grid grid-cols-9'>
      <div className='grid-cols-3  md:order-2 order-1'>
        <Beginning />
      </div>
      <div className='grid-cols-3 md:order-2 order-2'>
        <About />
      </div>
      <div className='grid-cols-3 md:order-2 order-3'>
        <Inspirations />
      </div>
      <div className='grid-cols-2 md:order-1 order-4'>
        <Stacks />
      </div>
      <div className='grid-cols-3 md:order-2 order-5'>
        <Projects />
      </div>
      <div className='grid-cols-3 md:order-2 order-6'>
        <Services />
      </div>
      <div className='grid-cols-3 md:order-3 order-7'>
        <Experience />
      </div>
      <div className='grid-cols-3 md:order-2 order-8'>
        <Feedbacks />
      </div>
      <div className='grid-cols-3 md:order-2 order-9'>
        <Hobbies />
      </div>
      <div className='grid-cols-3 md:order-2 order-10'>
        <Contact />
      </div>
    </main>
  )
}

export default Portfolio