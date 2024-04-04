import images from '../../assets/images';
import AboutMe from '../AboutMe/AboutMe';
import NewsSeminor from './NewsSeminor';
import SchoolerShipInfo from './SchoolerShipInfo';
import Testimonial from './Testimonial';

function Home() {
  return (
    <div>
      <div className=" bg-sky-400">
        <img
          src={images.background}
          alt="background"
          className="w-full lg:h-[400px] h-auto"
        />
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
      <NewsSeminor />
      <SchoolerShipInfo />
      <AboutMe />
      <Testimonial />
      <div className="grid grid-cols-5 gap-4 mx-[80px] my-[50px]">
        <img
          src={images.australia_brand}
          alt="australia"
          className="col-span-1"
        />
        <img
          src={images.united_kingdom}
          alt="united_kingdom"
          className="col-span-1"
        />
        <img
          src={images.united_state}
          alt="united_state"
          className="col-span-1"
        />
        <img src={images.korean} alt="korean" className="col-span-1" />
        <img src={images.japan} alt="japan" className="col-span-1" />
      </div>
      <div className="grid grid-cols-3 gap-[100px] my-[100px] mx-[200px]">
        <div className="col-span-1 flex flex-col items-center">
          <div className="h-[100px] w-[100px] rounded-full bg-blue-700 flex items-center justify-center">
            <img src={images.service} alt="service" />
          </div>
          <p className="text-2xl py-[10px] font-bold">Dịch vụ</p>
          <p className="text-center font-normal text-sm">
            Với đội ngũ 100% chuyên gia tư vấn của HustEDU đều từng học tập và
            làm việc tại nước ngoài, những khó khăn ứng viên sắp gặp trên con
            đường du học, chúng tôi đều đã từng trải qua. Các chuyên gia của
            HustEDU sẽ cung cấp thông tin về Hệ thống giáo dục của mỗi quốc gia,
            chia sẻ những kinh nghiệm, những mặt được, mất của cuộc sống du học
            sinh và các cơ hội học bổng để giúp ứng viên chọn lựa chương trình
            học phù hợp nhất.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="h-[100px] w-[100px] rounded-full bg-blue-700 flex items-center justify-center">
            <img src={images.feature_2} alt="shooler ship" />
          </div>
          <p className="text-2xl py-[10px] font-bold">Học bổng </p>
          <p className="text-center font-normal text-sm">
            Ngày càng có nhiều sinh viên lựa chọn đi du học nước ngoài và nhiều
            người trông cậy vào nguồn hỗ trợ tài chính của gia đình hoặc vay
            tiền để trang trải chi phí du học. Trên thực tế nhiều trường đại học
            và cao đẳng cung cấp học bổng và tài trợ cho sinh viên quốc tế, giúp
            việc du học trở nên nhẹ nhàng hơn về mặt tài chính.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="h-[100px] w-[100px] rounded-full bg-blue-700 flex items-center justify-center">
            <img src={images.feature_3} alt="service" />
          </div>
          <p className="text-2xl py-[10px] font-bold">Điểm đến</p>
          <p className="text-center font-normal text-sm">
            Danh sách đối tác của HustEDU trải rộng trên toàn thế giới, bao gồm
            các trường đại học danh tiếng đến từ khắp các châu lục. Đến với
            chúng tôi, bạn có thể tìm được ngôi trường mong muốn và phù hợp nhất
            với bản thân
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
