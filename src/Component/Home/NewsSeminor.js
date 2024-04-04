import images from '../../assets/images';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function NewsSeminor() {
  return (
    <div className="grid grid-cols-10 gap-8 mt-[100px] mx-[100px]">
      <div className="col-span-5">
        <div className="w-auto">
          <p className="font-bold text-2xl underline my-4">Thông báo</p>
          <img
            src={images.harvard}
            alt="harvard"
            className="h-[300px] w-[400px]"
          />
          <div className="w-full mt-4">
            <p className="font-medium text-lg">
              Tuyển sinh đại học Harvard - Cơ hội tuyệt vời trong tháng này
            </p>
            <div className="flex items-center py-2">
              <CalendarMonthIcon fontSize="medium" />
              <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="w-auto">
          <p className="font-bold text-2xl underline my-4">Sự kiện du học</p>
          <div className="grid grid-rows-9 gap-8">
            <div className="flex row-span-3">
              <img
                src={images.seminor_1}
                alt="seminor"
                className="h-[120px] w-[180px]"
              />
              <div className="flex flex-col ml-10">
                <p className="font-medium text-sm ">
                  Ngày hội săn học bổng lớn nhất năm 2024
                </p>
                <div className="flex items-center py-2">
                  <CalendarMonthIcon fontSize="medium" />
                  <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
                </div>
              </div>
            </div>
            <div className="flex row-span-3">
              <img
                src={images.seminor_2}
                alt="seminor"
                className="h-[120px] w-[180px]"
              />
              <div className="flex flex-col ml-10">
                <p className="font-medium text-sm ">
                  Du học Úc , cơ hội lớn , thử ngay{' '}
                </p>
                <div className="flex items-center py-2">
                  <CalendarMonthIcon fontSize="medium" />
                  <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
                </div>
              </div>
            </div>
            <div className="flex row-span-3">
              <img
                src={images.seminor_3}
                alt="seminor"
                className="h-[120px] w-[180px]"
              />
              <div className="flex flex-col ml-10">
                <p className="font-medium text-sm ">
                  Triển lãm du học và định cư tại nước ngoài
                </p>
                <div className="flex items-center py-2">
                  <CalendarMonthIcon fontSize="medium" />
                  <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSeminor;
