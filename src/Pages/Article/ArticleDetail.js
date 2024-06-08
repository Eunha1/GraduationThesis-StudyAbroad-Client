import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest } from '../../api/api';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDate } from '../../utils/Convert';
import Breadcrumb from '../../Component/Breadcrumb';
import LeftMenu from '../../Component/Menu/LeftMenu';
function ArticleDetail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
  ];
  useEffect(() => {
    getPostById();
    // eslint-disable-next-line
  }, []);
  const getPostById = async () => {
    const data = await getRequest(`/get-post/${id}`);
    setData(data.data);
  };
  return (
    <div>
      {data ? (
        <div className="mx-[100px]">
          <Breadcrumb
            title={data.title}
            listBreadcrumb={[
              ...listBreadcrumb,
              {
                isCurrentPage: true,
                src: `/chi-tiet-bai-viet/${id}`,
                title: data.title,
              },
            ]}
          />
          <div className="flex">
            <LeftMenu />
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
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default ArticleDetail;
