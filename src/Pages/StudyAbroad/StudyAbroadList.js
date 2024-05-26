import { useEffect, useState } from 'react';
import Breadcrumb from '../../Component/Breadcrumb';
import { getRequest } from '../../api/api';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDate } from '../../utils/Convert';
import { useNavigate } from 'react-router-dom';
function StudyAbroadList() {
  const [data, setData] = useState();
  const title = 'Tin tức và sự kiện';
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
    {
      isCurrentPage: true,
      src: '/study-abroad',
      title: 'Tin tức và sự kiện',
    },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    getListPost();
  }, []);
  const getListPost = async () => {
    const data = await getRequest('/list-post/category?slug=du-hoc');
    setData(data.data);
  };
  const handleClick = (id) => {
    navigate(`/study-abroad/${id}`);
  };
  return (
    <div>
      <Breadcrumb title={title} listBreadcrumb={listBreadcrumb} />
      <div>
        <div className="grid grid-cols-3 gap-[50px]">
          {data ? (
            data.map((item, index) => (
              <div
                className="col-span-1 flex flex-col cursor-pointer"
                key={index}
                onClick={() => handleClick(item._id)}
              >
                <div className="flex flex-col font-medium text-sm">
                  {item.title}
                </div>
                <div className="flex items-center py-2">
                  <CalendarMonthIcon fontSize="small" />
                  <p className="italic font-light ml-4 text-[12px]">
                    Ngày đăng {convertDate(item.updated_at)}
                  </p>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt="seminor"
                    className="h-[200px] w-[180px] object-cover"
                  />
                </div>
                <div className="font-medium text-[12px]">
                  {item.description}
                </div>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyAbroadList;
