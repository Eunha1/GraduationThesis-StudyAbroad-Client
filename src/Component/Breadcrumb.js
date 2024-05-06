import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

function Breadcrumb({ title, listBreadcrumb }) {
  return (
    <div>
      <div className="text-[20px] font-medium my-2 p-1 font-Inter text-[#504d4d]">
        {title}
      </div>
      <div className="p-1 my-2">
        <Breadcrumbs>
          {listBreadcrumb.map((item, index) =>
            item.isCurrentPage ? (
              <Link
                to={item.src}
                key={index}
                className="text-black hover:underline"
              >
                {item.title}
              </Link>
            ) : (
              <Link
                to={item.src}
                key={index}
                className="text-[#747373] hover:underline"
              >
                {item.title}
              </Link>
            ),
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
