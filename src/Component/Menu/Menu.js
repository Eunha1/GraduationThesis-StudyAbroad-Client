import { Link } from 'react-router-dom';
import { TopMenu } from '../../utils/Menu';
import { Fragment, useState } from 'react';

function Menu() {
  const [open, setOpen] = useState({});
  const handleOpen = (item) => {
    setOpen({ ...open, [item.key]: !open[item.key] });
  };
  return (
    <nav className="py-4 bg-[#3861AF] px-8 text-white">
      <ul className=" grid grid-cols-7">
        {TopMenu.map((item, index) => (
          <li
            key={index}
            className="text-center col-span-1 font-Inter cursor-pointer hover:underline relative"
          >
            <Link
              to={item.src}
              onClick={item?.child ? () => handleOpen(item) : ''}
            >
              {item.title}
            </Link>
            {item?.child  && open[item.key] ? (
              <ul className="flex flex-col absolute bg-white text-black right-8 top-8">
                { !item?.haveSubChild ? item.child.map((child, index) => (
                    <li
                      className="font-Inter px-3 py-4 border-t-[0.5px] border-gray-200 text-left text-[14px] hover:bg-[#1877F2] hover:text-white"
                      key={index}
                    >
                      {child.title}
                    </li>
                )) : (item.child.map((child,index)=>(
                  <div>
                    {child.title}
                    {child.subChild.map((subChild, index)=>(
                      <li>{subChild.title}</li>
                    ))}
                  </div>
                )))}
              </ul>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
