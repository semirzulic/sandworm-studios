"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import taskManagementApp from "/public/images/demos/task-management-app.jpg";
import moneyTransferApp from "/public/images/demos/money-transfer-app.jpg";
import expenseTrackerApp from "/public/images/demos/expense-tracker-app.jpg";
import gameApp from "/public/images/demos/game-app.jpg";
import saasApp from "/public/images/demos/saas-app.jpg";
import onlineBankingApp from "/public/images/demos/online-banking-app.jpg";

const screenData = [
  {
    id: "1",
    image: taskManagementApp,
    title: "Task Management App",
  },
  {
    id: "2",
    image: saasApp,
    title: "SaaS Application",
  },
  {
    id: "3",
    image: moneyTransferApp,
    title: "Money Transfer App",
  },
  {
    id: "4",
    image: gameApp,
    title: "Gaming Platform",
  },
  {
    id: "5",
    image: expenseTrackerApp,
    title: "Expense Tracker",
  },
  {
    id: "6",
    image: onlineBankingApp,
    title: "Online Banking",
  },
];

const AppScreens: React.FC = () => {
  const handleDemoClick = () => {
    // Trigger the demos button click
    const demosButton = document.querySelector('[data-demos-trigger]') as HTMLButtonElement;
    if (demosButton) {
      demosButton.click();
    }
  };

  return (
    <>
      <div id="screens" className="pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] relative before:content-[''] before:bg-[#F9F3EF] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[35%]">
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Our Portfolio
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Explore Our Diverse Range of Website Designs and Applications
            </h2>
          </div>

          {screenData && (
            <Swiper
              spaceBetween={35}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="tm-app-screens-slider"

              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              {screenData &&
                screenData.map((value, i) => (
                  <SwiperSlide key={i} className="text-center">
                    <div 
                      onClick={handleDemoClick}
                      className="cursor-pointer group"
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={value.image}
                          alt={value.title}
                          className="inline-block w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Demo
                          </span>
                        </div>
                      </div>
                      <h4 className="mt-[15px] text-[16px] font-medium group-hover:text-primary-color transition-colors">
                        {value.title}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default AppScreens;
