import images from '../../assets/images';

function Testimonial() {
  return (
    <div className="mt-[100px]">
      <div className="h-[600px] w-full relative">
        <img
          src={images.bg_testimonial}
          alt="background"
          className="h-full w-full"
        />
        <div className="absolute z-10 top-3 left-10 right-10">
          <div className="h-full w-full py-[10px] px-[60px] flex flex-col ">
            <div className="flex justify-center">
              <p className="text-white font-bold text-2xl ">
                Lời ngỏ của các học sinh HustEDU
              </p>
            </div>
            <div className="grid grid-cols-6 gap-[60px] mx-[150px] mt-[50px] h-[80%]">
              <div className="col-span-3">
                <div className="border rounded-xl bg-invisible text-white">
                  <p className="p-10 italic">
                    Lâu rồi mới gặp được các anh chị tư vấn viên nhiệt tình như
                    HustEDU. Cứ lúc nào mình thắc mắc là được phản hồi luôn,
                    không phải chờ đợi gì cả. Từ định hướng chọn trường, chọn
                    thành phố cho hợp với nguyện vọng, đến lúc giải quyết hồ sơ,
                    mọi thủ tục đều khá nhanh chóng và gọn gàng. Tuyệt vời hơn
                    nữa là được anh chị tư vấn và giúp đỡ rất nhiều trong thủ
                    tục hồ sơ nên mình đã dành được học bổng cho cả 2 năm học
                    Thạc sỹ trước mắt. Mình khuyến khích các bạn đang muốn du
                    học và tìm kiếm học bổng như mình tới với HustEDU để được tư
                    vấn nhé
                  </p>
                </div>
                <div className="flex mt-[20px]">
                  <img
                    src="https://pm1.aminoapps.com/7279/2f28b5a09ac2fd891447d9d77c40b9a0f1f9d559r1-1080-1350v2_hq.jpg"
                    alt="eunha"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div className="flex flex-col ml-4 text-white py-2">
                    <p className="font-bold text-xl">Eunha</p>
                    <p className="font-light text-sm italic">
                      Học bổng toàn phần đại học Harvard
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="border rounded-xl bg-invisible text-white">
                  <p className="p-10 italic">
                    Cực kỳ may mắn khi mình biết đến HustEDU - 1 trung tâm tư
                    vấn du học với chất lượng số 1 thế giới. Tất cả mọi người
                    trong đều vô cùng nhiệt tình và đáng yêu, từ anh Bình giám
                    đốc cho đến các bạn nhân viên (nhất là bạn Quang Phúc trực
                    tiếp làm việc với mình, giúp đỡ mình rất nhiều trong các
                    công việc giấy tờ mà mình vốn không thành thạo lắm). Cảm ơn
                    HustEDU đã giúp mình hoàn thành giấc mơ du học Anh với học
                    bổng toàn phần từ University of Hull. Nếu các bạn muốn tìm
                    những học bổng chất lượng thì mình tin HustEDU là lựa chọn
                    tuyệt vời! Cảm ơn và yêu quý HustEDU thật nhiều!
                  </p>
                </div>
                <div className="flex mt-[20px]">
                  <img
                    src="https://pm1.aminoapps.com/7279/2f28b5a09ac2fd891447d9d77c40b9a0f1f9d559r1-1080-1350v2_hq.jpg"
                    alt="eunha"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <div className="flex flex-col ml-4 text-white py-2">
                    <p className="font-bold text-xl">Eunha</p>
                    <p className="font-light text-sm italic">
                      Học bổng toàn phần đại học Harvard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
