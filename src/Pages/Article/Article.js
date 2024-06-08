import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../Component/Breadcrumb';
import { useEffect, useState } from 'react';
import { getRequest } from '../../api/api';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDate } from '../../utils/Convert';
import LeftMenu from '../../Component/Menu/LeftMenu';
function Article() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [menu, setMenu] = useState();
  const navigate = useNavigate();
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
  ];
  useEffect(() => {
    getListPostMenu();
    getDetailMenu();
    // eslint-disable-next-line
  }, [id]);
  const getListPostMenu = async () => {
    const data = await getRequest(`/list-post/menu/${id}`);
    setData(data.data);
  };
  const getDetailMenu = async () => {
    const data = await getRequest(`/menu/get-menu/${id}`);
    setMenu(data.data);
  };
  const handleClick = (id) => {
    navigate(`/chi-tiet-bai-viet/${id}`);
  };
  return (
    <div>
      <div className="mx-[100px]">
        {menu ? (
          <Breadcrumb
            title={menu.name}
            listBreadcrumb={[
              ...listBreadcrumb,
              {
                isCurrentPage: true,
                src: `/${menu.slug}`,
                title: menu.name,
              },
            ]}
          />
        ) : (
          <></>
        )}
        <div className="flex">
          <LeftMenu />
          <div className="grid grid-cols-3 gap-x-[80px] gap-y-[40px]">
            {data ? (
              data.map((item, index) => (
                <div
                  className="col-span-1 flex flex-col cursor-pointer  w-[260px]"
                  key={index}
                  onClick={() => handleClick(item._id)}
                >
                  <div className="flex flex-col font-medium text-[#3861AF] text-[14px]">
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
                      className="h-[300px] w-full object-cover"
                    />
                  </div>
                  <div className="font-medium text-[13px] mt-2">
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
    </div>
  );
}

export default Article;
