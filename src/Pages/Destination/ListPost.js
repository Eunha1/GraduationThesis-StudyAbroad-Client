import Breadcrumb from '../../Component/Breadcrumb';
import { getRequest } from '../../api/api';

function ListPost() {
  const title = 'Điểm đến hứa hẹn';
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
    {
      isCurrentPage: true,
      src: '/destination',
      title: 'Điểm đến',
    },
  ];
  // const getListPost = async ()=>{
  //     const data = await getRequest('/list-post/category?slug=')
  // }
  return (
    <div>
      <Breadcrumb title={title} listBreadcrumb={listBreadcrumb} />
    </div>
  );
}

export default ListPost;
