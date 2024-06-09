import { useEffect, useState } from 'react';
import images from '../../assets/images';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getRequest } from '../../api/api';
import { convertDate } from '../../utils/Convert';
import { useNavigate } from 'react-router-dom';
function NewsSeminor() {
  const [news, setNews] = useState();
  const [event, setEvent] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getListPostByType();
  }, []);
  const getListPostByType = async () => {
    const news = await getRequest('/home-manager/news-and-event/type?type=2');
    const event = await getRequest('/home-manager/news-and-event/type?type=1');
    setNews(news.data);
    setEvent(event.data);
  };
  const handleClick = (id) => {
    navigate(`/chi-tiet-bai-viet/${id}`);
  };
  return (
    <div className="grid grid-cols-2 gap-x-[50px] mt-[50px] mx-[200px]">
      <div className="col-span-1">
        <div className="w-auto">
          <p className="font-bold text-xl underline my-4">Sự kiện</p>
          <div className="grid grid-rows-9 gap-8 cursor-pointer">
            {event ? (
              event.map((item, index) => (
                <div
                  className="flex row-span-3"
                  key={index}
                  onClick={() => handleClick(item.post_info._id)}
                >
                  <img
                    src={item.post_info.image}
                    alt="seminor"
                    className="h-[200px] w-[150px] object-cover"
                  />
                  <div className="flex flex-col ml-10">
                    <p className="font-medium text-sm ">
                      {item.post_info.title}
                    </p>
                    <div className="flex items-center py-2">
                      <CalendarMonthIcon fontSize="medium" />
                      <p className="italic font-light ml-4">
                        Ngày đăng {convertDate(item.post_info.updated_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="w-auto">
          <p className="font-bold text-xl underline my-4">Tin tức</p>
          <div className="grid grid-rows-9 gap-8 cursor-pointer">
            {news ? (
              news.map((item, index) => (
                <div
                  className="flex row-span-3"
                  key={index}
                  onClick={() => handleClick(item.post_info._id)}
                >
                  <img
                    src={item.post_info.image}
                    alt="seminor"
                    className="h-[200px] w-[150px] object-cover"
                  />
                  <div className="flex flex-col ml-10">
                    <p className="font-medium text-sm ">
                      {item.post_info.title}
                    </p>
                    <div className="flex items-center py-2">
                      <CalendarMonthIcon fontSize="medium" />
                      <p className="italic font-light ml-4">
                        Ngày đăng {convertDate(item.post_info.updated_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSeminor;
