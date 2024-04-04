import images from '../../assets/images';
function Header() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="border-solid border-b border-slate-700 py-4 xl:px-10">
        <div className="flex xl:justify-normal justify-around h-20 max-h-28 w-full">
          <div className="flex justify-center items-center 2xl:mx-10 xl:mx-2 mx-1">
            <img
              src={images.logo}
              alt="logo"
              className="lg:h-20 lg:w-32 md:w-24 md:h-14 w-24 h-16 object-cover"
            />
            <div className="flex flex-col justify-center lg:p-2">
              <p className="m-0 lg:pt-1 lg:text-3xl md:text-xl text-base font-Fredericka font-medium not-italic">
                HustEDU
              </p>
              <p className="m-0 lg:pt-2 lg:text-2xl md:text-lg text-base font-GreatVibes font-medium not-italic">
                Chắp cánh tương lai
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center 2xl:mx-10 xl:mx-2 mx-1">
            <img
              src={images.email}
              alt="email"
              className="lg:h-9 lg:w-9 w-7 h-7 object-cover"
            />
            <div className="flex flex-col justify-center lg:p-3 p-2">
              <p className="m-0 font-Fredericka font-medium not-italic lg:text-base md:text-xs hidden md:flex">
                EMAIL
              </p>
              <p className="m-0 pt-1 font-Almendra font-medium not-italic lg:text-base text-sm hidden sm:flex">
                doquangphuc18102001@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center 2xl:mx-10 xl:mx-2 mx-1">
            <img
              src={images.hotline}
              alt="hotline"
              className="lg:w-9 lg:h-9 w-7 h-7 object-cover"
            />
            <div className="flex flex-col justify-center lg:p-3 p-1">
              <p className="m-0 font-Fredericka font-medium not-italic lg:text-base md:text-xs hidden md:flex">
                HOTLINE
              </p>
              <p className="m-0 pt-1 font-Almendra font-medium not-italic lg:text-base text-sm hidden  sm:flex">
                0342246482
              </p>
            </div>
          </div>
          <div className="xl:flex-1 flex items-center w-16  xl:w-80 xl:mx-12 xl:p-4">
            <div className="flex-1 xl:flex xl:items-center xl:border-solid xl:border-slate-700 xl:border xl:rounded-lg bg-white w-full h-9 py-1 pr-1">
              <input
                placeholder="Search here"
                className="w-4/5 h-full px-4 outline-none text-base border-transparent bg-transparent xl:flex hidden "
              />
              <div className="flex justify-center items-center border rounded-lg border-solid border-slate-700 px-1 lg:w-16 w-12 h-full bg-blue-700 cursor-pointer">
                <p className="text-white text-center lg:text-base text-xs">
                  Search
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
