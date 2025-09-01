import React from 'react'

const Button = ({ prop }: { prop: string }) => {
  return (
    <button className='px-4 py-2 rounded-xl bg-[#9162E7] hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out'>
      {prop}
    </button>
  )
}

export default Button