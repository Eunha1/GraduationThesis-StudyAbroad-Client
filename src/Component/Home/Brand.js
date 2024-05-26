import images from '../../assets/images';

function Brand() {
  return (
    <div>
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

export default Brand;
