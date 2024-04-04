import images from '../../assets/images';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function SchoolerShipInfo() {
  return (
    <div className="grid grid-cols-10 mt-[100px] mx-[100px]">
      <div className="col-span-5 flex flex-col">
        <p className="underline font-bold text-xl mb-10">Học bổng của trường</p>
        <div className="flex">
          <img
            src={images.MIT_logo}
            alt="mit-logo"
            className="w-[150px] h-[100px]"
          />
          <div className="flex flex-col ml-4">
            <p className="font-medium text-lg">
              Học bổng trị giá 10 triệu USD của MIT !!! Cực hot
            </p>
            <div className="flex items-center py-2">
              <CalendarMonthIcon fontSize="medium" />
              <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 ">
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - "Học bổng lãnh đạo tương lai" đại học MIT - America
          </p>
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - Du học Mỹ chỉ với 100.000USD/năm , cực hời, nhanh tay ngay
          </p>
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - Đại học MIT có hơn 100 suất học bổng toàn phần ...
          </p>
        </div>
      </div>
      <div className="col-span-5 flex flex-col">
        <p className="underline font-bold text-xl mb-10">Học bổng chính phủ</p>
        <div className="flex">
          <img src={images.MEXT} alt="mext" className="w-[150px] h-[100px]" />
          <div className="flex flex-col ml-4">
            <p className="font-medium text-lg">
              Học bổng chính phủ Nhật, siêu hấp dẫn đây
            </p>
            <div className="flex items-center py-2">
              <CalendarMonthIcon fontSize="medium" />
              <p className="italic font-light ml-4">Ngày đăng 01/04/2024</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 ">
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - "Học bổng kĩ sư tương lai" đại học Tokyo - Nhật Bản
          </p>
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - Du học MỸ chỉ với 10.000.000 Yên/năm , cực hời, nhanh tay ngay
          </p>
          <p className="font-light font-Almendra text-base hover:text-blue-600 p-1">
            - Đại học Tokyo có hơn 1000 suất học bổng toàn phần ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolerShipInfo;
