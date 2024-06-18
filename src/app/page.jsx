"use client";

import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MultipleItems from "./multiple-slider.component";
import MobileNavigation from "./mobile-navigation.component";

const designImages = [
  "/assets/design_1.png",
  "/assets/design_2.png",
  "/assets/design_3.png",
];

const photogImages = [
  "/assets/slide-1.jfif",
  "/assets/slide-2.jfif",
  "/assets/slide-3.jfif",
  "/assets/slide-4.jfif",
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
};

  return (
    <>
      {/* MOBILE NAV  */}
      <MobileNavigation closeNav={toggleNav} isOpen={isNavOpen} />

      {/* HEADER  */}
      <header
        id="nav"
        className="sticky w-full top-0 bg-[#222222] pt-5 z-40 sm:px-14 lg:px-20"
      >
        <div className="relative flex h-20 pb-4 flex-row justify-between">
          <div className="flex">
            <a href="#main">
              <img src="/assets/assy-logo.png" alt="" className="h-full" />
            </a>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleNav}>
              <svg
                className="w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(224,167,1,1)"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </button>
          </div>

          <div className="md:flex items-center sm:hidden">
            <ul className="flex flex-row space-x-6 text-[#E0A701]">
              <a href="#main">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#service">
                <li>SERVICE</li>
              </a>
              <a href="#project">
                <li>PROJECT</li>
              </a>
              <a href="#contact">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="relative mx-auto px-6 sm:px-14 lg:px-20 overflow-clip">
        {/* Lines */}
        <hr className="absolute bg-gradient-to-r from-[#E0A701] to-[#7A5B01] border-0 h-[1px] w-[281px] top-0 left-0 md:top-8 md:right-0" />
        {/* MAIN SECTION */}
        <section id="main" className="scroll-mt-20 border-none md:border-solid md:border-t md:border-[#E0A701]">
          {/* Wrapper */}
          <div className="pt-6 w-full flex justify-between items-center lg:items-stretch lg:h-screen">
            <div className="flex w-full flex-col-reverse md:flex-row md:absolute">
              
              {/* Left Column - Name with Social Media */}
              <div className="w-1/2 flex-none flex flex-col justify-center">
                <p className="text-xl">HELLO , I’M</p>
                <p className="font-monea text-9xl">Alyssa Gerez</p>
                {/* ICONS */}
                <div className="mt-2 flex flex-row">
                  {/* Email Icon */}
                  <a href="">
                    <svg
                      className="w-[30px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(224,167,1,1)"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a href="">
                    <svg
                      className="ml-3 w-[30px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(224,167,1,1)"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  {/* Facebook Icon */}
                  <a href="">
                    <svg
                      className="ml-2.5 w-[30px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(224,167,1,1)"
                    >
                      <path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path>
                    </svg>
                  </a>
                </div>
                {/* BUTTON */}
                <div className="mt-4">
                  <button className="bg-[#E0A701] p-1 items-center justify-center text-black text-xl rounded-md w-36 flex flex-row">
                    My Service{" "}
                    <a href="#service">
                      <svg
                        className="w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full h-full flex justify-center items-center md:w-1/2 md:relative">
                {/* Kulot pic */}
                <div className="md:relative">
                  <img
                    className="w-full"
                    src="./assets/alyssa_main.png"
                    alt=""
                  />
                  <hr className="absolute bottom-10 right-0 bg-gradient-to-r from-[#E0A701] to-[#7A5B01] border-0 h-[1px] w-[317px] md:-left-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-[6.5rem]">
          {/* Section Wrapper */}
          <div className="h-screen flex flex-col">
            {/* Section Header */}
            <div className="w-full border-t border-[#E0A701]">
              <p>FREELANCE</p>
            </div>
            {/* Two-Column Div Wrapper */}
            <div className="flex flex-row my-auto">
              {/* Column 1 - About Me*/}
              <div className="w-1/3">
                <h2 className="text-3xl font-bold lg:text-5xl">ABOUT ME</h2>
              </div>
              {/* Column 2 - Description*/}
              <div className="w-2/3 space-y-8">
                <p className="text-lg font-light lg:text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-lg font-light lg:text-2xl">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
                <a
                  href=""
                  className="p-0 items-center justify-start text-[#E0A701] text-sm w-fit flex flex-row relative after:bg-[#E0A701] after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 lg:text-xl"
                >
                  Read More{" "}
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE SECTION */}
        <section id="service" className="scroll-mt-[6.5rem]">
          {/* Section Wrapper */}
          <div className="min-h-screen">
            {/* Card Section Wrapper */}
            <div className="flex flex-col pb-20 border-b border-[#E0A701]">
              {/* Header - Service */}
              <div className="w-1/3">
                <h2 className="text-3xl font-bold lg:text-5xl">SERVICE</h2>
              </div>

              {/* Cards Section */}
              <div className="flex flex-col mt-4 justify-evenly items-center space-x-0 gap-20 lg:flex-row lg:gap-0 lg:space-x-16 lg:items-start">
                {/* Card 1 */}
                <div className="bg-[#383836] w-2/3 mt-6 rounded-lg flex flex-col p-6 justify-between lg:gap-2 lg:w-1/3 lg:flex-auto">
                  {/* Computer Icon */}
                  <div className="flex justify-center lg:justify-end">
                    <svg
                      className="w-64 lg:w-16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path>
                    </svg>
                  </div>

                  {/* Text Group */}
                  <div className="space-y-6 pb-10">
                    {/* Website Design Header  */}
                    <div className="flex justify-center lg:block lg:justify-normal">
                      <h1 className="hidden text-2xl font-bold break-words lg:block xl:text-4xl">
                        WEBSITE
                      </h1>
                      <h1 className="hidden text-2xl font-bold break-words lg:block xl:text-4xl">
                        DESIGN
                      </h1>
                      <h1 className="flex text-2xl font-bold break-words lg:hidden xl:text-3xl">
                        WEBSITE DESIGN
                      </h1>
                    </div>

                    <p className="text-[#906B00] text-base px-6 lg:px-0">
                      There are many elements in photography that come together
                      to make an image be considered “good”. Some of these
                      elements include, but are not limited to lighting, the
                      rule of thirds, lines, shapes, texture, patterns, and
                      color.
                    </p>
                  </div>
                </div>

                {/* Card 2 Wrapper */}
                <div className="flex flex-col w-auto relative items-center h-full justify-evenly lg:items-baseline lg:w-1/3">
                  {/* Card 2 */}
                  <div className="bg-[#E0A701] h-auto gap-0 w-2/3 rounded-lg flex flex-col p-6 lg:justify-between lg:gap-2 lg:w-full">
                    {/* Camera Icon */}
                    <div className="flex justify-center lg:justify-end">
                      <svg
                        className="w-64 lg:w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgba(53,53,53,1)"
                      >
                        <path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path>
                      </svg>
                    </div>

                    {/* Text Group */}
                    <div className="space-y-6 pb-10">
                      {/* Website Design Header */}
                      <div className="flex justify-center lg:block">
                        <h1 className="text-[#383836] text-3xl font-bold break-words xl:text-4xl">
                          PHOTOGRAPHY
                        </h1>
                      </div>

                      <p className="text-[#383836] text-base px-6 w-full font-semibold lg:px-0 lg:text-xl  lg:w-11/12">
                        There are many elements in photography that come
                        together to make an image be considered “good”. Some of
                        these elements include, but are not limited to lighting,
                        the rule of thirds, lines, shapes, texture, patterns,
                        and color.
                      </p>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="hidden mt-6 w-full justify-center items-center space-x-6 lg:flex">
                    <button className="bg-[#E0A701] py-3 px-5 justify-center text-black text-xl rounded-md w-auto flex flex-row">
                      BOOK SERVICE{" "}
                      <svg
                        className="w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#383836] w-2/3 mt-6 rounded-lg flex flex-col p-6 justify-between lg:gap-2 lg:w-1/3 lg:flex-auto">
                  {/* Computer Icon */}
                  <div className="flex justify-center lg:justify-end">
                    <svg
                      className="w-64 lg:w-16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
                    </svg>
                  </div>

                  {/* Text Group */}
                  <div className="space-y-6 pb-10">
                    {/* Website Design Header  */}
                    <div className="flex justify-center lg:block lg:justify-normal">
                      <h1 className="hidden text-2xl font-bold break-words lg:block xl:text-4xl">
                        MOBILE APP
                      </h1>
                      <h1 className="hidden text-2xl font-bold break-words lg:block xl:text-4xl">
                        DESIGN
                      </h1>
                      <h1 className="flex text-2xl font-bold break-words lg:hidden xl:text-3xl">
                        MOBILE APP DESIGN
                      </h1>
                    </div>

                    <p className="text-[#906B00] text-base px-6 lg:px-0">
                      There are many elements in photography that come together
                      to make an image be considered “good”. Some of these
                      elements include, but are not limited to lighting, the
                      rule of thirds, lines, shapes, texture, patterns, and
                      color.
                    </p>
                  </div>
                </div>

                {/* Button (Responsive) */}
                <div className="flex mt-6 w-full justify-center items-center space-x-6 lg:hidden">
                  <button className="bg-[#E0A701] py-3 px-5 justify-center text-black text-xl rounded-md w-auto flex flex-row">
                    BOOK SERVICE{" "}
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT SECTION */}
        <section id="project" className="scroll-mt-[9rem]">
          {/* Section Wrapper */}
          <div className="pt-16 min-h-screen">
            {/* Section Header */}
            <div className="w-full">
              <h2 className="text-3xl font-bold lg:text-5xl">MY PROJECT</h2>
            </div>
            {/* Two-Row Wrapper */}
            <div className="flex flex-col space-y-12">
              {/* Row 1 - Web and Mobile App Design  */}
              <div>
                {/* Row 1 Header Wrapper  */}
                <div className="flex text-xl flex-row w-full justify-center lg:text-2xl pb-10">
                  <p>Website and Mobile Application Design</p>
                </div>
                {/* Row 1 Image Wrapper */}
                <MultipleItems
                  slides={designImages}
                  show={2}
                  scroll={1}
                ></MultipleItems>
              </div>
              {/* Row 2 - Photography  */}
              <div className="pb-28">
                {/* Row 2 Header Wrapper  */}
                <div className="flex text-xl flex-row w-full justify-center lg:text-2xl pb-10">
                  <p>Photography</p>
                </div>
                {/* Row 2 Image Wrapper */}
                <MultipleItems
                  slides={photogImages}
                  show={2}
                  scroll={1}
                ></MultipleItems>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          {/* Section Wrapper */}
          <div className="flex w-full items-center border-t border-[#E0A701]">
            {/* Two-Row Wrapper */}
            <div className="flex w-full flex-col gap-4 px-10">
              {/* Row 1 Wrapper */}
              <div className="flex justify-between pt-10">
                {/* Column 1 Wrapper */}
                <div className="w-1/3 flex items-center">
                  <h2 className="text-5xl">Contact Us</h2>
                </div>
                {/* Column 2 Wrapper */}
                <div className="w-2/3 flex gap-10 px-5">
                  {/* Text Group 1 Wrapper */}
                  <div className="flex flex-col w-full gap-4">
                    <input
                      className="placeholder:text-[#E0A701] placeholder:font-light placeholder:font-roboto rounded-md py-4 px-5 bg-[#363131]"
                      type="text"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      className="placeholder:text-[#E0A701] placeholder:font-light placeholder:font-roboto rounded-md py-4 px-5 bg-[#363131]"
                      type="email"
                      id="email"
                      placeholder="E-Mail"
                    />
                    <input
                      className="placeholder:text-[#E0A701] placeholder:font-light placeholder:font-roboto rounded-md py-4 px-5 bg-[#363131]"
                      type="text"
                      inputMode="numeric"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  {/* Text Group 2 */}
                  <div className="w-full h-full">
                    <textarea
                      className="placeholder:text-[#E0A701] placeholder:font-light placeholder:font-roboto bg-[#363131] rounded-md py-3 px-4 w-full h-full resize-none"
                      name="message"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="w-full flex pr-5 justify-end pb-12">
                <button className="font-roboto font-light bg-[#E0A701] text-black px-8 py-1 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <img
        className="absolute bottom-0 -left-40 -z-10 opacity-5 w-[840px]"
        src="/assets/assy-logo.png"
        alt=""
      />

      {/* FOOTER */}
      <footer className="w-full bg-[#4F3B00] h-20">
        {/* FOOTER WRAPPER */}
        <div className="h-full overflow-hidden grid grid-cols-2 md:justify-center md:items-center md:gap-10 md:flex lg:gap-20">
          {/* E-MAIL */}
          <div className="flex gap-1 lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 lg:w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#E0A701"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
            </svg>
            <p className="font-roboto font-light opacity-50 text-sm lg:text-base">
              yssagerez15@gmail.com
            </p>
          </div>
          {/* INSTAGRAM */}
          <div className="flex gap-1 lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 lg:w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#E0A701"
            >
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
            <p className="font-roboto font-light opacity-50 text-sm lg:text-base">
              @yssacreatives / uiyssacreative
            </p>
          </div>
          {/* FACEBOOK */}
          <div className="flex gap-1 lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 lg:w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#E0A701"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
            </svg>
            <p className="font-roboto font-light opacity-50 text-sm lg:text-base">
              Yssa Creatives
            </p>
          </div>
          {/* PHONE */}
          <div className="flex gap-1 lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 lg:w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#E0A701"
            >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg>
            <p className="font-roboto font-light opacity-50 text-sm lg:text-base">
              09062428185 / 09760535896
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
