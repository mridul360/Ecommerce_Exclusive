import React from 'react'
import arrival2 from "../../assets/arrival2.png"
import arrival3 from "../../assets/arrival3.png"
import arrival4 from "../../assets/arrival4.png"


const ArrivalRight = () => {
  return (
    <div className='flex flex-wrap items-center w-[50%] gap-[30px]'>
      <img src={arrival2} alt="" />
      <img src={arrival3} alt="" />
      <img src={arrival4} alt="" />
    </div>
  )
}

export default ArrivalRight
