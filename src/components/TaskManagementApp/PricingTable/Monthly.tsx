"use client";

import React from "react";
import Link from "next/link";

const Monthly: React.FC = () => {
  return (
    <>
      <div 
        className="mt-[30px] md:mt-[50px]"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-once="false"
      >
        <div className="container">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="group border-2 border-[#F9F3EF] rounded-[20px] bg-white relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-[#0A65FC]">
              <div>
                <h3 className="text-[28px] leading-[45px]">Starter</h3>
                <p>Perfect for small businesses and personal brands</p>
              </div>

              <div>
                <h2 className="text-primary-color text-[32px] leading-[0] mb-[25px]">
                  $999{" "}
                  <span className="text-[15px] text-[#384179] font-normal">
                    /One-time
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] text-primary-color text-center border border-[#0A65FC] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold mb-[15px]">
                  Package includes:
                </h4>

                <ul className="space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Up to 5 pages</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Responsive design</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Basic SEO optimization</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Contact form integration</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>30 days support</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group border-2 border-[#F9F3EF] rounded-[20px] bg-white relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-[#0A65FC]">
              <div>
                <div className="bg-[#061257] text-white uppercase text-center text-[15px] lg:text-[10px] xl:text-[10px] 2xl:text-[15px] py-[4px] md:absolute md:top-0 md:left-0 w-full md:rotate-[-35deg] mb-[15px] md:mb-[0] md:mt-[25px] lg:mt-[8px] xl:mt-[10px] 2xl:mt-[25px] md:ml-[-284px] lg:ml-[-117px] xl:ml-[-145px] 2xl:ml-[-152px]">
                  Popular
                </div>

                <h3 className="text-[28px] leading-[45px]">Professional</h3>
                <p>Ideal for growing businesses with advanced needs</p>
              </div>

              <div>
                <h2 className="text-primary-color text-[32px] leading-[0] mb-[25px]">
                  $2,499{" "}
                  <span className="text-[15px] text-[#384179] font-normal">
                    /One-time
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] text-primary-color text-center border border-[#0A65FC] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold mb-[15px]">
                  Package includes:
                </h4>

                <ul className="space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Up to 15 pages</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Custom design & branding</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Advanced SEO optimization</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>CMS integration</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>E-commerce functionality</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Analytics integration</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Performance optimization</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>90 days priority support</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group border-2 border-[#F9F3EF] rounded-[20px] bg-white relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-[#0A65FC]">
              <div>
                <h3 className="text-[28px] leading-[45px]">Enterprise</h3>
                <p>Complete solution for large-scale web applications</p>
              </div>

              <div>
                <h2 className="text-primary-color text-[32px] leading-[0] mb-[25px]">
                  $5,999{" "}
                  <span className="text-[15px] text-[#384179] font-normal">
                    /One-time
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] text-primary-color text-center border border-[#0A65FC] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold mb-[15px]">
                  Package includes:
                </h4>

                <ul className="space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Unlimited pages</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Full custom web application</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Advanced features & APIs</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Database architecture</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Dedicated project manager</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monthly;
