import { useEffect, useState } from 'react';
import { getRequest } from '../../api/api';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function LeftMenu() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMenuTree();
  }, []);
  const getMenuTree = async () => {
    const data = await getRequest('/menu/get-menu');
    setMenu(data.data);
  };
  return (
    <nav className="bg-gray-100 lg:min-w-[300px] min-w-[250px] h-max mr-10">
      <ul className="flex flex-col p-4">
        {menu ? (
          menu.map((item, index) => (
            <li key={index} className="my-2">
              <Link
                to={item.children.length > 0 ? '' : `/${item._id}`}
                className="underline underline-offset-4 decoration-blue-400 font-Inter cursor-pointer font-medium decoration-2 lg:text-[20px] text-[16px] hover:text-[#3861AF]"
              >
                {item.name}
              </Link>
              <div className="mt-2 border-b-[0.5px] border-gray-300"></div>
              {item.children.length > 0 ? (
                <ul>
                  {item.children.map((child, index) => (
                    <li className="" key={index}>
                      <Link to={`/${child._id}`} className="flex p-1">
                        <ChevronRightIcon />
                        <p className="font-Inter ml-3 lg:text-base text-sm hover:text-[#3861AF]">
                          {child.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
}

export default LeftMenu;
