"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-task",
    title: "Modern UI/UX Design",
    shortText:
      "Beautiful, intuitive interfaces that users love. We create engaging designs that combine aesthetics with functionality for exceptional user experiences.",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-planning",
    title: "Performance Optimization",
    shortText:
      "Lightning-fast load times and smooth interactions. We optimize every aspect of your website for speed, ensuring visitors stay engaged and conversions increase.",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-refresh",
    title: "Content Management",
    shortText:
      "Easy-to-use CMS solutions that put you in control. Update your content, images, and pages without technical knowledge or developer assistance.",
    aosDelay: "300",
  },
  {
    id: "4",
    icon: "flaticon-completed-task",
    title: "E-Commerce Solutions",
    shortText:
      "Complete online store functionality with secure payments, inventory management, and seamless checkout experiences that drive sales.",
    aosDelay: "400",
  },
  {
    id: "5",
    icon: "flaticon-time-tracking",
    title: "Analytics Integration",
    shortText:
      "Track your success with built-in analytics. Monitor visitor behavior, conversion rates, and key metrics to make data-driven decisions.",
    aosDelay: "500",
  },
  {
    id: "6",
    icon: "flaticon-third-party",
    title: "Third-Party Integrations",
    shortText:
      "Seamlessly connect with your favorite tools and services. From CRMs to payment processors, we integrate everything your business needs.",
    aosDelay: "600",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div id="features" className="bg-[#F9F3EF] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div 
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay='100'
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Key Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Everything You Need to Build a Powerful Online Presence
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-white rounded-[15px] p-[30px] md:p-[40px] group hover:bg-primary-color"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div className="bg-[#D4EDFF] text-primary-color w-[70px] h-[70px] leading-[70px] rounded-full text-center text-[40px] mb-[25px] transition duration-500 ease-in-out group-hover:scale-[1.1] group-hover:bg-white">
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </div>
                ))}
            </div>
          )}

          <div 
            className="text-center mt-[30px] md:mt-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Link
              href="/features"
              className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
