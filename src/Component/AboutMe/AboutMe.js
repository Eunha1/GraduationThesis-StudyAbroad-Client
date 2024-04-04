import images from '../../assets/images';

function AboutMe() {
  return (
    <div className="grid grid-col-10 mt-[100px] mx-[100px]">
      <div className="col-span-5">
        <p className="underline font-bold text-xl py-2">Về chúng tôi</p>
        <img src={images.logo_image} alt="hust edu" className="my-4" />
        <div className="font-medium text-base italic py-2">
          <p>
            HustEDU - một trung tâm tư vấn du học uy tín bậc nhất Việt Nam. Tại
            đây chúng tôi cung cấp mọi dịch vụ từ việc tư vấn cho tới làm hồ sơ
            , đảm bảo 100% các bạn vào được trường mong muốn nếu các bạn có thực
            lực
          </p>
          <p>
            Chúng tôi - những nhân viên xuất sắc nhất HustEDU sẽ đảm bảo , cam
            kết uy tín cho các bạn . Chỉ cấn các bạn có tiền - chúng tôi sẽ làm
            hết
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
