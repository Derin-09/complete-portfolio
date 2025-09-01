
import React from 'react'
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
import CursorGlow from '../motions/CursorGlow'

const Portfolio = () => {

  return (
    
    <div className="relative">
      <CursorGlow />
    <main className="md:grid grid-cols-5 gap-3 auto-rows-min md:grid-flow-row-dense md:max-w-[1440px] select-none" style={{ 'fontFamily': 'var(--font-manrope)' }}>

      {/* {DESKTOP VIEW} */}

      {/* {FIRST GRID} */}
      <section className='hidden md:flex flex-col gap-3 lg:col-span-1 md:col-span-2 '>
        <div className="">
          <Stacks />
        </div>
        <div className="">
          <Projects />
        </div>
        <div className="">
          <Services />
        </div>
      </section>


      {/* {SECOND VIEW} */}
      <section className='hidden md:flex flex-col gap-3 lg:col-span-2 md:col-span-3 '>
        <div className="">
          <Beginning />
        </div>
        <div className="">
          <About />
        </div>
        <div className="">
          <Inspirations />
        </div>
      </section>


      {/* {THIRD VIEW} */}
      <section className='hidden md:flex flex-col gap-3 lg:col-span-2 md:col-span-5 '>
        <section className='flex gap-3'>
          <div className="lg:flex-1 md:flex-3">
            <Experience />
          </div>
          <div className="lg:flex-1 md:flex-1">
            <Feedbacks />
          </div>
        </section>
        <section className="flex gap-3">
          <div className="lg:flex-4 md:flex-3">
            <Hobbies />
          </div>
          <div className="lg:flex-5 md:flex-6">
            <Contact />
          </div>
        </section>
      </section>




      {/* {MOBILE VIEW} */}

      <div className="md:hidden col-span-3 col-start-3">
        <Beginning />
      </div>
      <div className="md:hidden col-span-3 col-start-3">
        <About />
      </div>
      <div className="md:hidden col-span-3 col-start-3">
        <Inspirations />
      </div>
      <div className="md:hidden col-span-2 col-start-1">
        <Stacks />
      </div>
      <div className="md:hidden col-span-2 col-start-1">
        <Projects />
      </div>
      <div className="md:hidden col-span-2 col-start-1">
        <Services />
      </div>
      <div className="md:hidden col-span-2 col-start-6">
        <Experience />
      </div>
      <div className="md:hidden col-span-2 col-start-8">
        <Feedbacks />
      </div>
      <section className="md:hidden md:gri grid-cols-9 gap-3 col-span-4 col-start-6">
        <div className="col-span-4">
          <Hobbies />
        </div>
        <div className="col-span-5">
          <Contact />
        </div>
      </section>
    </main>
 </div>
  )
}

export default Portfolio