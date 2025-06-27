import React from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";
import coat from "../../assets/jack.png"
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <section>
      <Containar>
        <div className="flex items-end justify-between">
          <div>
            <MainHeading>This Month</MainHeading>
            <SubHeading>Best Selling Products</SubHeading>
          </div>
          <div>
            <button className="py-4 px-12 font-primary font-medium leading-6 bg-primary text-white rounded">
              View All
            </button>
          </div>
        </div>
        <div>
          <div className="bg-[#F5F5F5] w-[270px] px-[63px] py-[52px] relative">
            <div className="flex items-center justify-center">
              <img src={coat} alt="" />
            </div>
            <div>
              <div className="absolute top-0 right-0">
                <div className="rounded-full w-[30px] h-[30px] bg-white flex items-center justify-center mt-2">
                  <CiHeart size={20} />
                </div>
                <div className="rounded-full w-[30px] h-[30px] bg-white flex items-center justify-center mt-2">
                  <IoEyeOutline />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-primary leading-[24px]">The north coat</h2>
            <p className="font-primary text-base leading-5 font-semibold text-primary mt-2" >$260</p>

            <div className="flex item-center  text-[#FFAD33] mt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default Products;
