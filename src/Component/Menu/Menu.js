import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { getRequest } from '../../api/api';
import { LightTooltip } from '../../utils/CustomToolTip';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Menu() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMenuTree();
    // eslint-disable-next-line
  }, []);
  const getMenuTree = async () => {
    const data = await getRequest('/menu/get-menu');
    setMenu(data.data);
  };
  return (
    <nav className="py-4 bg-[#3861AF] px-8 text-white font-Inter">
      <ul className="flex justify-around">
        <li className="text-center relative">
          <Link to="/" className="hover:underline cursor-pointer">
            Trang chủ
          </Link>
        </li>
        {menu ? (
          menu.map((item, index) => (
            <li key={index} className="text-center relative">
              {item.children.length > 0 ? (
                <LightTooltip
                  leaveDelay={500}
                  title={
                    <Fragment>
                      {item.children.map((child, index) => (
                        <Link
                          to={`/${child._id}`}
                          className="flex flex-col text-[16px] px-1 py-2 border-b-[0.5px] border-gray-300 hover:text-[#1877F2]"
                          key={index}
                        >
                          {child.children.length > 0 ? (
                            <LightTooltip
                              placement="right"
                              slotProps={
                                index === 0
                                  ? {
                                      popper: {
                                        modifiers: [
                                          {
                                            name: 'offset',
                                            options: {
                                              offset: [60, 0],
                                            },
                                          },
                                        ],
                                      },
                                    }
                                  : {}
                              }
                              title={
                                <div
                                  className={
                                    child.children.length > 4
                                      ? 'grid grid-cols-2 gap-x-[20px]'
                                      : 'flex flex-col'
                                  }
                                >
                                  {child.children.map((subChild, index) => (
                                    <div
                                      className=" flex items-center border-b-[0.5px] border-gray-300"
                                      key={index}
                                    >
                                      <Link
                                        to={`/${subChild._id}`}
                                        className="col-span-1 text-[16px] px-1 py-2  hover:text-[#1877F2]"
                                      >
                                        {subChild.name}
                                      </Link>
                                      <div className="text-[#3861AF] text-[12px] ml-[12px]">
                                        {subChild.children.length > 0 ? (
                                          <div>Xem thêm</div>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              }
                            >
                              <p className="font-Inter">
                                {child.name}
                                <span className="float-right ml-2">
                                  <ChevronRightIcon />{' '}
                                </span>
                              </p>
                            </LightTooltip>
                          ) : (
                            <>
                              <p className="font-Inter">{child.name}</p>
                            </>
                          )}
                        </Link>
                      ))}
                    </Fragment>
                  }
                >
                  <Link
                    to={`/${item._id}`}
                    className="hover:underline cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </LightTooltip>
              ) : (
                <Link
                  to={`/${item._id}`}
                  className="hover:underline cursor-pointer"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))
        ) : (
          <div>Loading</div>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
