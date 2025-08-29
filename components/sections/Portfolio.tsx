
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
    <main className="md:grid grid-cols-9 gap-3 auto-rows-min md:grid-flow-row-dense md:max-w-7xl">
      <div className="col-span-3 col-start-3">
        <Beginning />
      </div>
      <div className="col-span-3 col-start-3">
        <About />
      </div>
      <div className="col-span-3 col-start-3">
        <Inspirations />
      </div>
      <div className="col-span-2 col-start-1">
        <Stacks />
      </div>
      <div className="col-span-2 col-start-1">
        <Projects />
      </div>
      <div className="col-span-2 col-start-1">
        <Services />
      </div>
      <div className="col-span-2 col-start-6">
        <Experience />
      </div>
      <div className="col-span-2 col-start-8">
        <Feedbacks />
      </div>
      <section className="md:grid grid-cols-9 gap-3 col-span-4 col-start-6">
        <div className="col-span-4">
          <Hobbies />
        </div>
        <div className="col-span-5">
          <Contact />
        </div>
      </section>
    </main>


    // <main className='md:grid grid-cols-9 grid-rows-11 gap-x-3 gap-y-3 auto-rows-auto grid-auto-flow-dens max-w-7xl'>
    //   <div className='col-span-3 row-span-2 col-start-3 row-start-1  md:orde-2 orde-1'>
    //     <Beginning />
    //   </div>
    //   <div className='col-span-3 col-start-3 row-start-3 row-span-5 md:orde-6 orde-2'>
    //     <About />
    //   </div>
    //   <div className='col-span-3 col-start-3 md:orde-8 orde-3'>
    //     <Inspirations />
    //   </div>
    //   <div className='col-span-2 row-span-4 col-start-1 row-start-1 md:orde-1 orde-4'>
    //     <Stacks />
    //   </div>
    //   <div className='col-span-2 col-start-1 row-start-5 row-span-3 md:orde-4 orde-5'>
    //     <Projects />
    //   </div>
    //   <div className='col-span-2 col-start-1 row-start-8 row-span-4 md:orde-7 orde-6'>
    //     <Services />
    //   </div>
    //   <div className='col-span-2 col-start-6 row-start-1 row-span-6 md:orde-3 orde-7'>
    //     <Experience />
    //   </div>
    //   <div className='col-span-2 col-start-8 row-start-1 row-span-6 md:orde-4 orde-8'>
    //     <Feedbacks />
    //   </div>
    //   <section className='md:grid grid-cols-9 gap-3 col-span-4 col-start-6 row-start-7 row-span-5 md:orde-9 orde-9'>
    //     <div className='col-span-4 col-start-1  orde-9'>
    //       <Hobbies />
    //     </div>
    //     <div className='col-span-5 col-start-5  orde-10'>
    //       <Contact />
    //     </div>
    //   </section>
    // </main>


  )
}

export default Portfolio















{/* <main className="md:grid grid-cols-9 grid-rows-8 gap-3">
  <div className="orde-1 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-1">
    <Stacks />
  </div>

  <div className="orde-2 md:col-span-3 md:col-start-3 md:row-span-1 md:row-start-1">
    <Beginning />
  </div>

  <div className="orde-3 md:col-span-2 md:row-span-4 md:col-start-6 md:row-start-1">
    <Experience />
  </div>

  <div className="orde-4 md:col-span-2 md:row-span-4 md:col-start-8 md:row-start-1">
    <Feedbacks />
  </div>

  <div className="orde-5 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4">
    <Projects />
  </div>

  <div className="orde-6 md:col-span-3 md:row-span-4 md:col-start-3 md:row-start-2">
    <About />
  </div>

  <div className="orde-7 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-6">
    <Services />
  </div>

  <div className="orde-8 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-6">
    <Inspirations />
  </div>

  <section className="orde-9 md:col-span-4 md:row-span-4 md:col-start-6 md:row-start-5 md:grid grid-cols-9 gap-3">
    <div className="orde-9 md:col-span-4 md:col-start-1">
      <Hobbies />
    </div>
    <div className="orde-10 md:col-span-5 md:col-start-5">
      <Contact />
    </div>
  </section>
</main> */}