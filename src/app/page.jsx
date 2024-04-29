import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto px-2 sm:px-6 lg:px-20">
      {/* HEADER  */}
      <header className="sticky top-0 bg-[#222222] lg:pt-5">
        <div className="relative flex h-20 pb-4 flex-row justify-between border-b border-[#E0A701]">
          <div className="flex">
            <img
              src="https://s3-alpha-sig.figma.com/img/7da0/e629/c6e4ca599a048298830ce362ec5e3d5a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NeAYXOOtWjCaak6eZ4LPNtLBuNxrLZ00gtYuogFSar3CpxbyRiwHmGgrmj-Y0quuU79o8U8erzdZvz00JmcYXXBSbeNznjlsjsGW0d37rMaRNN-rm~MCskQ5fbHyCsRromglHQbuNDpQx-Y9auusq6sSX4k0mpVuwooL7pM5s1jnYni6ujbEwcQ6Q0y31HgjHfrXzjrmM-X6~c8~l4Z0Umzvn6ok-y6XJB~oo0QA54XbRrEC653O0-xBR6NDUMeL0n1QiEPa5ES7l1OdEXZx3imeHJx3Wr90pSdKXgnVymPXFEmkxbGC3Pu3B9fOaPCLez9Po8Gqsff4kuS9wa3BYQ__"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <ul className="flex flex-row space-x-6 text-[#E0A701]">
              <a href="#main">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="">
                <li>PROJECT</li>
              </a>
              <a href="">
                <li>SERVICE</li>
              </a>
              <a href="">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
        </div>
      </header>

      {/* SECTION 1 */}
      <section id="main">
        {/* Wrapper */}
        <div className="w-full h-screen flex mt-5 flex-row justify-between">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
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
            <div className="mt-4">
              <button className="bg-[#E0A701] p-1 items-center justify-center text-black text-xl rounded-md w-36 flex flex-row">
                My Service{" "}
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
          {/* Right Column */}
          <div>
            {/* SVG Wrapper */}
            <div className="absolute right-0">
              <svg
                width="797"
                height="550"
                viewBox="0 0 797 550"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="536"
                  y1="0.5"
                  x2="797"
                  y2="0.499977"
                  stroke="url(#paint0_linear_0_1)"
                />
                <line
                  x1="3.16695e-10"
                  y1="549.5"
                  x2="250"
                  y2="549.5"
                  stroke="url(#paint1_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="536"
                    y1="1.5"
                    x2="797"
                    y2="1.49998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.51" stop-color="#E0A701" />
                    <stop offset="1" stop-color="#7A5B01" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="3.16695e-10"
                    y1="550.5"
                    x2="250"
                    y2="550.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.51" stop-color="#E0A701" />
                    <stop offset="1" stop-color="#7A5B01" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Kulot pic */}
            <img src="./assets/alyssa_main.png" alt="" />
          </div>
        </div>
      </section>

      <section id="about">
        {/* Section Wrapper */}
        <div className="h-screen border-t border-[#E0A701] pb-20">
          {/* Section Header */}
          <div className="w-full">
            <p>FREELANCE</p>
          </div>
          {/* Two-Column Div Wrapper */}
          <div className="mt-20 flex flex-row">
            {/* Column 1 */}
            <div className="w-1/3"><h2 className="text-5xl font-bold">ABOUT ME</h2></div>
            {/* Column 2 */}
            <div className="w-2/3 space-y-8">
              <p className="text-2xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-2xl font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
              <a href="" className="p-0 items-center justify-start text-[#E0A701] text-xl w-fit flex flex-row hover:border-b border-[#E0A701]">
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
    </main>
  );
}
