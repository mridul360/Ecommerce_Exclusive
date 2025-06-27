import React from 'react'
import SubHeading from '../../layout/SubHeading'
import MainHeading from '../../layout/MainHeading'
import Containar from '../../layout/Containar'
import ArrivalLeft from './ArrivalLeft'
import ArrivalRight from './ArrivalRight'

const Arrival = () => {
    return (
        <div className='pb-[182px]'>
            <Containar>
                <div>
                <MainHeading>Featured</MainHeading>
                <SubHeading>New Arrival</SubHeading>
                <div className='flex items-center gap-[30px] mt-15'>
                    <ArrivalLeft/>
                <ArrivalRight/>
                </div>

            </div>
            </Containar>
        </div>
    )
}

export default Arrival
