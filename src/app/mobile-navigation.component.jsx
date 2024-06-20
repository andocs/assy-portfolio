function MobileNavigation({ closeNav, isOpen }) {
  return (
    <div className={`flex fixed flex-col w-[300px] h-full z-50 right-0 bg-[#222222] border-l border-[#E0A701] px-12 py-8 gap-10 pr-6 md:hidden duration-500 ease-in-out ${isOpen?"translate-x-0":"translate-x-full"}`}>
      <div className="flex justify-end">
        <button onClick={closeNav}>
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(224,167,1,1)"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </button>{" "}
      </div>

      <div>
        <ul className="text-4xl gap-10 flex flex-col">
          <a onClick={closeNav} href="#main">
            <li>HOME</li>
          </a>
          <a onClick={closeNav} href="#about">
            <li>ABOUT</li>
          </a>
          <a onClick={closeNav} href="#project">
            <li>PROJECT</li>
          </a>
          <a onClick={closeNav} href="#contact">
            <li>CONTACT</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigation;
