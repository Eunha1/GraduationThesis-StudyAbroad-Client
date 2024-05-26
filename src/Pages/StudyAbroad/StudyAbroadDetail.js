import { useParams } from 'react-router-dom';
import Breadcrumb from '../../Component/Breadcrumb';
import { getRequest } from '../../api/api';
import { useEffect, useRef, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDate } from '../../utils/Convert';
import images from '../../assets/images';
import Menu from '../../Component/Menu/Menu';
function StudyAbroadDetail() {
  const { post_id } = useParams();
  const [data, setData] = useState();
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
    {
      src: '/study-abroad',
      title: 'Sự kiện du học',
    },
  ];
  const myRef = useRef(null);
  useEffect(() => {
    getPostById();
  }, []);
  const getPostById = async () => {
    const data = await getRequest(`/get-post/${post_id}`);
    setData(data.data);
  };
  return (
    <div>
      <Menu />
      <img
        src={images.background}
        alt="background"
        className="w-full lg:h-[400px] h-auto object-cover"
      />
      {data ? (
        <div>
          <Breadcrumb
            title={data.title}
            listBreadcrumb={[
              ...listBreadcrumb,
              {
                isCurrentPage: true,
                src: `/study-abroad/${post_id}`,
                title: data.title,
              },
            ]}
          />
          <div className="border-t-[1px] border-gray-500 mb-[50px]"></div>
          <div className="flex flex-col ml-[50px] ">
            <div className="font-medium text-[18px]">{data.title}</div>
            <div className="flex items-center">
              <div className="flex items-center py-2 mr-[50px]">
                <CalendarMonthIcon fontSize="small" />
                <p className="italic font-light ml-4 text-[12px]">
                  Ngày đăng {convertDate(data.updated_at)}
                </p>
              </div>
              <div className="">
                <p className="italic font-light ml-4 text-[12px]">
                  Author {data.author}
                </p>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default StudyAbroadDetail;
