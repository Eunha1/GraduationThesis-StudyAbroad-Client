import images from '../../assets/images';
import { MailBoxIcon, PhoneTalkIcon, PinMapIcon } from '../../assets/icon';
function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto text-white bg-slate-600">
      <div className="flex justify-around mt-5 md:px-5 px-1">
        <div className="flex flex-col xl:w-3/6 lg:w-4/6 ">
          <div className="flex items-center boder-solid border-b-2 border-slate-800 md:w-64 md:ml-3">
            <img
              src={images.logo}
              alt="logo"
              className="lg:w-24 lg:h-16 md:w-20 md:h-12 w-18 h-10 object-cover"
            />
            <div className="flex-1 flex flex-col  justify-center p-2">
              <p className="m-0 pt-3 font-medium font-Fredericka not-italic lg:text-2xl md:text-xl text-base">
                HustEDU
              </p>
              <p className="m-0 pt-3 font-GreatVibes font-medium not-italic lg:text-xl md:text-lg text-base">
                Chắp cánh tương lai
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col ">
            <div className="flex-1 flex md:flex-row flex-col md:justify-between md:items-center md:p-2 p-1">
              <div className="flex flex-col lg:m-0 mr-3 mt-2">
                <p className="m-0 lg:ml-3 ml-1 font-Almendra font-medium not-italic lg:text-lg text-base">
                  Văn Phòng tại Hà Nội{' '}
                </p>
                <div className="flex items-center">
                  <PinMapIcon className="w-8 h-8 p-1" />
                  <p className="flex-1 m-0 ml-1 font-Almendra font-medium not-italic lg:text-lg text-sm">
                    Số 1 - Đại Cồ Việt, Hai bà Trưng{' '}
                  </p>
                </div>
                <div className="flex items-center ml-1">
                  <PhoneTalkIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic lg:text-lg text-sm">
                    Hotline : +84 342 268 428
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:m-0 md:ml-3 mt-2">
                <p className="m-0 lg:ml-3 ml-1 font-Almendra font-medium not-italic lg:text-lg text-base">
                  Văn Phòng tại Hà Nội{' '}
                </p>
                <div className="flex items-center">
                  <PinMapIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic lg:text-lg text-sm">
                    Số 1 - Đại Cồ Việt, Hai bà Trưng{' '}
                  </p>
                </div>
                <div className="flex items-center ml-1">
                  <PhoneTalkIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic lg:text-lg text-sm">
                    Hotline : +84 342 268 428
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex md:flex-row flex-col md:justify-between md:items-center md:p-2 p-1">
              <div className="flex flex-col lg:m-0 mr-3 mt-2">
                <p className="m-0 lg:ml-3 ml-1 font-Almendra font-medium not-italic text-base lg:text-lg">
                  Văn Phòng tại Thái Bình{' '}
                </p>
                <div className="flex items-center">
                  <PinMapIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic text-sm lg:text-lg">
                    Số 1 - Đại Cồ Việt, Hai bà Trưng{' '}
                  </p>
                </div>
                <div className="flex items-center ml-1">
                  <PhoneTalkIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic text-sm lg:text-lg">
                    Hotline : +84 342 268 428
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:m-0 md:ml-3 mt-2">
                <p className="m-0 ml-1 lg:ml-3 font-Almendra font-medium not-italic text-base lg:text-lg">
                  Văn Phòng tại Hà Nội{' '}
                </p>
                <div className="flex items-center">
                  <PinMapIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic text-sm lg:text-lg">
                    Số 1 - Đại Cồ Việt, Hai bà Trưng{' '}
                  </p>
                </div>
                <div className="flex items-center ml-1">
                  <PhoneTalkIcon className="w-8 h-8 p-1" />
                  <p className="m-0 ml-1 font-Almendra font-medium not-italic text-sm lg:text-lg">
                    Hotline : +84 342 268 428
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-1 mt-5 ">
          <div className="border-b-2 border-solid border-slate-900">
            <p className="m-0 p-1 mb-5 text-center font-Almendra font-semibold not-italic lg:text-2xl md:text-xl text-base">
              Thông tin liên hệ{' '}
            </p>
          </div>
          <div className="flex-1 flex flex-col ">
            <div className="flex items-center p-1 md:mt-5 mt-2">
              <MailBoxIcon className="w-9 h-9 p-1" />
              <p className="flex-1 m-0 md:ml-3 ml-1 font-Almendra font-medium not-italic text-sm md:text-base lg:text-xl">
                doquangphuc@gmail.com{' '}
              </p>
            </div>
            <div className="flex items-center p-1 ml-1">
              <PhoneTalkIcon className="w-8 h-8  p-1" />
              <p className="flex-1 m-0 md:ml-3 ml-1 font-Almendra font-medium not-italic text-xs md:text-sm lg:text-lg">
                Hà Nội : +84 342 268 428{' '}
              </p>
            </div>
            <div className="flex items-center p-1 ml-1">
              <PhoneTalkIcon className="w-8 h-8 p-1" />
              <p className="flex-1 m-0 md:ml-3 ml-1 font-Almendra font-medium not-italic text-xs md:text-sm lg:text-lg">
                Hà Nội : +84 342 268 428{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
