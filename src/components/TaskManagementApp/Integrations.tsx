"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import appIntegrationsImg from "/public/images/app-integrations.png";

const benefitsData = [
  {
    id: "1",
    icon: "flaticon-check-mark",
    title: "Modern Tech Stack",
    shortText:
      "We build with cutting-edge technologies like React, Next.js, Vue, and Node.js to ensure your website is fast, scalable, and future-proof.",
  },
  {
    id: "2",
    icon: "flaticon-check-mark",
    title: "Platform Integration",
    shortText:
      "Seamlessly connect with payment gateways, CRMs, email marketing tools, analytics platforms, and any third-party service your business needs.",
  },
];

const Integrations: React.FC = () => {
  return (
    <>
      <div id="integrations" className="bg-[#F9F3EF] py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Image
                src={appIntegrationsImg}
                alt="App Integrations"
                className="inline-block"
              />
            </div>

            <div className="space-y-[30px] md:space-y-[50px]">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
                  Technologies & Tools
                </h6>
                <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Built with Modern Technologies That Power Your Success
                </h2>
                <p>
                  We leverage the latest web technologies and frameworks to build high-performance websites. From React and Next.js to WordPress and Shopify, we choose the right tools for your specific needs, ensuring seamless integration with your existing business systems.
                </p>
              </div>

              {benefitsData && (
                <div
                  className="space-y-[30px]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  data-aos-once="false"
                >
                  {benefitsData &&
                    benefitsData.slice(0, 3).map((value, i) => (
                      <div className="flex space-x-[17px] rtl:space-x-reverse" key={i}>
                        <div className="text-center shrink-0 text-primary-color text-[20px]">
                          <i className={value.icon}></i>
                        </div>

                        <div>
                          <h3 className="text-[18px] mb-[5px]">
                            {value.title}
                          </h3>
                          <p>{value.shortText}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  View Technologies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
