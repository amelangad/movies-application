import React, { useState, useContext } from 'react'
import Aside from './Aside'
import MoviesList from './MoviesList'
import { FaRegListAlt, FaRegTimesCircle } from 'react-icons/Fa'

export default function Movies() {

  const [open, setOpen] = useState(true)

  return (
    <div className="w-full h-full">
      <div className={`${open ? 'open' : 'close'} z-40 fixed right-0 top-0 bg-black lg:bg-milky text-white font-roboto w-full lg:w-1/3  min-h-1/2 lg:h-full p-[5%]  lg:p-0 flex justify-start items-center transition-`}>
        <Aside />
      </div>
      <div className=" text-white text-2xl fixed top-20 right-[5rem] cursor-pointer z-50" onClick={() => setOpen(!open)}>
        {open ? <FaRegTimesCircle /> : <FaRegListAlt />}
      </div>
      <MoviesList />
    </div>
  )
}
