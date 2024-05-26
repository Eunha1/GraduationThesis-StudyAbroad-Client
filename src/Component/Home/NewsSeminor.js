import { useEffect, useState } from 'react';
import images from '../../assets/images';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getRequest } from '../../api/api';
import { convertDate } from '../../utils/Convert';
import { useNavigate } from 'react-router-dom';
function NewsSeminor() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getListPostBySlug();
  }, []);
  const getListPostBySlug = async () => {
    const data = await getRequest('/list-post/category?slug=du-hoc');
    setData(data.data);
  };
  const handleClick = (id) => {
    navigate(`/study-abroad/${id}`);
  };
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
          <div className="grid grid-rows-9 gap-8 cursor-pointer">
            {data ? (
              data.map((item, index) => (
                <div
                  className="flex row-span-3"
                  key={index}
                  onClick={() => handleClick(item._id)}
                >
                  <img
                    src={item.image}
                    alt="seminor"
                    className="h-[200px] w-[150px] object-cover"
                  />
                  <div className="flex flex-col ml-10">
                    <p className="font-medium text-sm ">{item.title}</p>
                    <div className="flex items-center py-2">
                      <CalendarMonthIcon fontSize="medium" />
                      <p className="italic font-light ml-4">
                        Ngày đăng {convertDate(item.updated_at)}
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
