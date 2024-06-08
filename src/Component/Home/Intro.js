import images from '../../assets/images';
function Intro() {
  return (
    <div>
      <div className=" bg-sky-400">
        <div className="flex flex-col items-center p-2 mt-[100px]">
          <p className="text-3xl font-bold font-Fredericka">
            Thành tựu của học sinh HustEDU{' '}
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 p-2 mx-[100px] mb-[100px]">
            <div className="flex flex-col items-center border border-solid rounded-md col-span-1 w-auto h-auto bg-white shadow-lg shadow-black">
              <img
                src={images.shoolership}
                alt="shooler-ship"
                className=" mb-5 w-full h-[200px]"
              />
              <div className="text-center font-Fredericka">
                <p className="text-2xl font-semibold p-2">500.000.000USD</p>
                <p className="text-lg p-2">
                  Là số tiền học bổng mà các học sinh của hustEDU thu được năm
                  2023
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center border border-solid rounded-md col-span-1 w-auto h-auto bg-white shadow-lg shadow-black">
              <img
                src={images.subject}
                alt="subject"
                className=" mb-5 w-full h-[200px]"
              />
              <div className="text-center font-Fredericka">
                <p className="text-2xl font-semibold p-2">100%</p>
                <p className="text-lg p-2">
                  Đỗ các ngành CNTT, Vật lý lượng tử các trường Harvard, MIT{' '}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center border border-solid rounded-md col-span-1 w-auto h-auto bg-white shadow-lg shadow-black">
              <img
                src={images.satScore}
                alt="sat-score"
                className=" mb-5 w-full h-[200px]"
              />
              <div className="text-center font-Fredericka">
                <p className="text-2xl font-semibold p-2">100%</p>
                <p className="text-lg p-2">Đạt điểm tối đa trong kì thi SAT </p>
              </div>
            </div>
            <div className="flex flex-col items-center border border-solid rounded-md col-span-1 w-auto h-auto bg-white shadow-lg shadow-black">
              <img
                src={images.university_2}
                alt="university"
                className=" mb-5 w-full h-[200px]"
              />
              <div className="text-center font-Fredericka">
                <p className="text-2xl font-semibold p-2">100%</p>
                <p className="text-lg p-2">
                  Các học sinh nhận được lời mời từ các trường mong muốn{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
