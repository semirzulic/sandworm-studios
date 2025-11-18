"use client";

import React from "react";
import Image from "next/image";

import appDownloadImg from "/public/images/task-management-app/app-download.png";

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download" className="px-[15px] xl:px-[30px]">
        <div
          className="max-w-[1700px] mx-auto rounded-[20px] py-[40px] md:py-[70px] px-[15px] lg:p-0"
          style={{
            background:
              "linear-gradient(277deg, #19AFFF 17.64%, #0A65FC 76.53%)",
          }}
        >
          <div className="container">
            <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div 
                className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right"
                data-aos="fade-up"
                data-aos-delay='100'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Ready to Get Started?
                </h6>

                <h2 className="text-white text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Let&rsquo;s Build Something Amazing Together
                </h2>

                <p className="text-white">
                  Ready to take your online presence to the next level? Whether you need a brand new website or want to revamp your existing one, we&apos;re here to help. Get in touch today for a free consultation and let&apos;s discuss how we can bring your vision to life.
                </p>

                <div className="mt-[30px] md:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a
                    href="#contact"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#fff] py-[15px] px-[40px] rounded-full transition duration-500 ease-in-out hover:bg-[#f0f0f0]">
                      <i className="ri-mail-line text-[28px]"></i>
                      <div>
                        <p className="text-[12px] leading-none mb-[6px]">
                          Get in touch
                        </p>
                        <h4 className="text-[15px] font-medium leading-none">
                          Contact Us
                        </h4>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#pricing"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#262A37] py-[15px] px-[40px] rounded-full transition duration-500 ease-in-out hover:bg-[#000]">
                      <i className="ri-price-tag-3-line text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">
                          View our
                        </p>
                        <h4 className="text-white text-[15px] font-medium leading-none">
                          Pricing Plans
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div 
                className="relative text-center"
                data-aos="fade-up"
                data-aos-delay='200'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Image
                  src={appDownloadImg}
                  alt="App Download"
                  className="inline-block lg:scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
