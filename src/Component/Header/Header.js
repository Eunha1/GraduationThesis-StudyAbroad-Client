import images from '../../assets/images';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
function Header() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-[30px]">
        <Link className="flex lg:col-span-1 col-span-2" to="/">
          <img src={images.logo} alt="logo" className='lg:w-[150px] lg:h-[100px] w-[100px] h-[80px] object-cover'/>
          <div className="flex flex-col font-medium p-2">
            <p className="font-Fredericka lg:text-2xl text-[30px]">HustEDU</p>
            <p className="lg:text-xl text-[16px] font-GreatVibes">Chắp cánh tương lai</p>
          </div>
        </Link>
        <div className="col-span-1 lg:flex hidden items-center ">
          <img
            src={images.email}
            className="xl:w-9 xl:h-9 w-7 h-7 object-cover"
            alt="email"
          />
          <div className="flex flex-col font-medium p-2">
            <p className="font-Fredericka">Email</p>
            <p className="font-Almendra  text-[#3861AF] text-[14px]">
              doquangphuc@gmail.com
            </p>
          </div>
        </div>
        <div className="col-span-2 flex  items-center">
          <div className="mr-[50px] lg:flex hidden items-center">
            <img
              src={images.hotline}
              className="xl:w-9 xl:h-9 w-7 h-7 object-cover"
              alt="hotline"
            />
            <div className="flex flex-col font-medium p-2">
              <p className="font-Fredericka">Hotline</p>
              <p className="font-Almendra text-[#3861AF] text-[14px]">0342246428</p>
            </div>
          </div>
          <Link to="/consultation" className="flex items-center lg:col-span-1 col-span-2">
            <img
              src={images.consultaion}
              className="w-9 h-9 object-cover"
              alt="consultation"
            />
            <div className="flex flex-col p-2">
              <p className="font-Fredericka text-[18px]">
                Hãy nói nguyện vọng của bạn với chúng tôi
              </p>
              <p className="font-Almendra text-[16px] text-[#3861AF]">
                Đăng kí tư vấn ngay !!!
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-1 flex items-center mr-4">
          <TextField
            size="small"
            variant="outlined"
            placeholder="Enter keyword"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
