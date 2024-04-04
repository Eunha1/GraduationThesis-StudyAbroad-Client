import { Link, NavLink } from 'react-router-dom';
import { LightTooltip } from '../../utils/CustomToolTip';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Menu() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center p-2 md:p-8 bg-slate-200">
        <nav className="w-full">
          <ul className="flex justify-evenly items-center ">
            <li>
              <NavLink className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer   ">
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <div className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                Điểm đến
              </div>
            </li>
            <li>
              <LightTooltip
                title = {
                  <div className='grid grid-rows-2 gap-6 py-3 px-2'>
                    <div className='flex items-center p-1'>
                      <ChevronRightIcon fontSize="medium"/>
                      <p className='ml-2 font-Almendra text-lg hover:text-blue-600 hover:underline'>Học bổng chính phủ</p>
                    </div>
                    <div className='flex items-center p-1'>
                      <ChevronRightIcon fontSize="medium"/>
                      <p className='ml-2 font-Almendra text-lg hover:text-blue-600 hover:underline'>Học bổng trường</p>
                      </div>
                  </div>
                }
              >
                <div className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                  Học bổng
                </div>
              </LightTooltip>
            </li>
            <li>
            <LightTooltip
                title = {
                  <div className='grid grid-rows-2 gap-6 py-3 px-2'>
                    <div className='flex items-center p-1'>
                      <ChevronRightIcon fontSize="medium"/>
                      <p className='ml-2 font-Almendra text-lg hover:text-blue-600 hover:underline'>Săn học bổng</p>
                    </div>
                    <div className='flex items-center p-1'>
                      <ChevronRightIcon fontSize="medium"/>
                      <p className='ml-2 font-Almendra text-lg hover:text-blue-600 hover:underline'>Thị thực</p>
                      </div>
                  </div>
                }
              >
              <div className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                Dịch vụ
              </div>
              </LightTooltip>
            </li>
            <li>
              <NavLink className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                Tin tức và sự kiện
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                Đăng kí tư vấn
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-800 no-underline text-sm md:text-base lg:text-lg font-Almendra font-medium not-italic cursor-pointer hover:underline">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
