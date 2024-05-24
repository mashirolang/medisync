import React, { useState, useEffect } from "react";
import Bg from "../assets/img/bg.jpg";
import CircleViolet from "../assets/img/circle3-violet.svg";
import DotsRed from "../assets/img/dots3-red.svg";
import ClinicImage from "../assets/img/clinic.jpg";

export default function Home() {
  const styling = {
    backgroundImage: `linear-gradient(#252525ad, #252525ad), url("${Bg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="bg-white">
      <main
        className="min-h-[100vh] bg-cover bg-no-repeat bg-center relative"
        style={styling}
      >
        {/* <div className="container ">
          <p>Barangay San Isidro</p>
        </div> */}
        <div
          className={`flex relative z-20 items-center overflow-hidden lg:px-20 lg:pt-36 pt-28`}
        >
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-white mb-6"></span>
              <h1 className="font-bebas-neue uppercase text-2xl sm:text-5xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Barangay San Isidro
                <span className="text-3xl sm:text-5xl text-red-500">
                  HEALTH CENTER
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Welcome to the Barangay San Isidro Health Center Website powered
                by MediSync! Your gateway to connect with us, find answers to
                your questions, and learn more about our commitment to your
                health. Contact us for assistance, explore FAQs for quick
                answers, and discover more about our dedicated health center.
                Your well-being is our priority.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-1.5 px-8 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  GO TO FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="wave wave-bottom w-full text-red-500">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          ></path>
        </svg>
      </div> */}

      <div className="w-full pt-16 pb-6 text-black flex items-center justify-center mb-6 md:mb-16">
        <div className="container flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center">
            HEALTH CENTER SERVICES
          </h2>
          <div className="grid max-w-sm gap-10 px-4 text-center sm:gap-12 md:max-w-4xl md:grid-cols-2 md:px-6 md:gap-16 lg:max-w-5xl lg:grid-cols-3 lg:gap-20">
            <div className="flex flex-col items-center space-y-2">
              <StethoscopeIcon className="h-12 w-12" />
              <p className="text-base font-medium">Check Up</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <PillIcon className="h-12 w-12" />
              <p className="text-base font-medium">Medication</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <HeartIcon className="h-12 w-12" />
              <p className="text-base font-medium">First Aid</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <HotelIcon className="h-12 w-12" />
              <p className="text-base font-medium">Emergency</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BookIcon className="h-12 w-12" />
              <p className="text-base font-medium">Health Records</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MoreHorizontalIcon className="h-12 w-12" />
              <p className="text-base font-medium">More</p>
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-hidden wave-top wave-bottom">
        <div className="wave wave-top w-full text-red-500">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div
          className="relative py-24 bg-red-500"
          style={{
            backgroundImage:
              "url('/flex-ui-assets/elements/pattern-dark2.svg')",
            backgroundPosition: "center",
          }}
        >
          <div className="relative container px-4 mx-auto">
            <div className="xl:max-w-4xl mb-8 md:mb-12 mx-auto text-center">
              <span className="inline-block w-28 h-2 py-px px-4 mb-4 text-xs leading-5 text-blue-50 bg-blue-500 font-medium uppercase rounded-full"></span>
              <h1 className="mb-4 text-3xl md:text-4xl leading-tight text-white font-heading font-bold">
                ABOUT HEALTH CENTER
              </h1>
              <p className="mb-6 text-base md:text-lg text-gray-300 font-heading">
                The San Isidro Barangay Health Center is your community's
                dedicated partner in promoting wellness and providing essential
                healthcare services. Our team of compassionate professionals is
                committed to serving you and your family with utmost care and
                expertise. From routine check-ups to specialized consultations,
                we prioritize your health needs with personalized attention and
                comprehensive care. Don't hesitate to reach out to us for any
                health concerns or inquiries. Your well-being is our priority,
                and we're here to support you every step of the way. Contact us
                today and experience the difference in care at San Isidro
                Barangay Health Center.
              </p>
              <a
                className="inline-flex items-center justify-center px-8 py-1.5 w-full md:w-auto text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <div className="relative max-w-xl mx-auto">
              <img
                className="absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
                src={CircleViolet}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
                src={DotsRed}
                alt=""
              />
              <img src={ClinicImage} className="relative" />
            </div>
          </div>
        </div>
        <div className="wave wave-bottom w-full text-red-500 mb-10">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      <div className="w-full text-black flex items-center justify-center">
        <div className="container flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WE ARE LOCATED AT
          </h2>
          <div className="w-full h-[80vh] flex items-start justify-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247457.8760460688!2d121.00002553350795!3d14.280650119916558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd635d5fb8e493%3A0x709265a893f1146!2sSan%20Isidro%20Health%20Center!5e0!3m2!1sen!2sph!4v1715849364366!5m2!1sen!2sph"
              width="80%"
              height="75%"
              allowfullscreen=""
              loading="lazy"
              className="border-none"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BracesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function PillIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

function StethoscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
