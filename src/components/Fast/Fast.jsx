import React from 'react'
import Containar from '../../layout/Containar'
import { TbTruckDelivery } from "react-icons/tb";
import { LuHeadset } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




const Fast = () => {
    return (
        <div className='pb-[162px]'>
            <Containar>
                <div className='flex gap-[88px] justify-center'>
                    <div >
                        <div className='w-[80px] h-[80px] rounded-full bg-[#2F2E30]  flex items-center justify-center mx-auto'>
                            <div className='w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center text-white'><TbTruckDelivery size={35} /></div>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-primary text-[20px] font-semibold leading-[28px] mb-2'> FREE AND FAST DELIVERY</h2>
                            <p className='font-primary text-[14px leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div >
                        <div className='w-[80px] h-[80px] rounded-full bg-[#2F2E30]  flex items-center justify-center mx-auto'>
                            <div className='w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center text-white'><LuHeadset
                                size={35} /></div>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-primary mb-2 text-[20px] font-semibold leading-[28px]'>24/7 CUSTOMER SERVICE</h2>
                            <p className='font-primary text-[14px leading-[21px]'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div >
                        <div className='w-[80px] h-[80px] rounded-full bg-[#2F2E30]  flex items-center justify-center mx-auto'>
                            <div className='w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center text-white'><IoShieldCheckmarkOutline size={35} /></div>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-primary mb-2 text-[20px] font-semibold leading-[28px]'>MONEY BACK GUARANTEE</h2>
                            <p className='font-primary text-[14px leading-[21px]'>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </Containar>
        </div>
    )
}

export default Fast
