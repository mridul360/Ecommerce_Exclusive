import React from 'react'
import Containar from '../../layout/Containar'
import cate from "../../assets/categories.png"

const Experience = () => {
  return (
    <div>
      <div className='pb-40'>
        <Containar>
            <div>
                <img src={cate} alt="" />
            </div>
        </Containar>
      </div>
    </div>
  )
}

export default Experience
