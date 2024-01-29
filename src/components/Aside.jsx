import React, { useContext } from 'react'
import { SearchContext } from './SearchContext'

export default function Aside() {

  const { list, favourite } = useContext(SearchContext)


  return (
    <aside className="w-full h-full  mt-40 lg:mt-80 flex flex-col justify-start items-center z-40 ">
      <h1 className="text-mdlg:text-xl text-white"><span className="text-xl lg:text-2xl flex justify-center lg:pt-[10%]">The best movie:<br /></span>{favourite}</h1>
      <h1 className="text-xl pt-24 p-5 text-orange">To watch: </h1>
      <ul className="flex flex-col justify-center w-full self-center px-[20%]">
        {list.map(item => <li key={crypto.randomUUID()} className="w-full p-2 flex items-center">{item}</li>)}
      </ul>
   
    </aside>
  )
}