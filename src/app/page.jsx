import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="mx-auto px-2 sm:px-6 lg:px-20 lg:pt-5 lg:pb-5">
        <div className="relative flex h-20 pb-4 flex-row justify-between border-b border-[#E0A701]">
          <div className="flex">
            <img
              src="https://s3-alpha-sig.figma.com/img/7da0/e629/c6e4ca599a048298830ce362ec5e3d5a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NeAYXOOtWjCaak6eZ4LPNtLBuNxrLZ00gtYuogFSar3CpxbyRiwHmGgrmj-Y0quuU79o8U8erzdZvz00JmcYXXBSbeNznjlsjsGW0d37rMaRNN-rm~MCskQ5fbHyCsRromglHQbuNDpQx-Y9auusq6sSX4k0mpVuwooL7pM5s1jnYni6ujbEwcQ6Q0y31HgjHfrXzjrmM-X6~c8~l4Z0Umzvn6ok-y6XJB~oo0QA54XbRrEC653O0-xBR6NDUMeL0n1QiEPa5ES7l1OdEXZx3imeHJx3Wr90pSdKXgnVymPXFEmkxbGC3Pu3B9fOaPCLez9Po8Gqsff4kuS9wa3BYQ__"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <ul className="flex flex-row space-x-6 text-[#E0A701]">
              <a href="">
                <li>HOME</li>
              </a>
              <a href="">
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
    </main>
  );
}
