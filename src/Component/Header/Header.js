import images from '../../assets/images';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
function Header() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-[30px]">
        <Link className="flex col-span-1" to="/">
          <img src={images.logo} alt="logo" />
          <div className="flex flex-col font-medium p-2">
            <p className="font-Fredericka text-2xl">HustEDU</p>
            <p className="text-xl font-GreatVibes">Chắp cánh tương lai</p>
          </div>
        </Link>
        <div className="col-span-1 flex items-center">
          <img
            src={images.email}
            className="w-9 h-9 object-cover"
            alt="email"
          />
          <div className="flex flex-col font-medium p-2">
            <p className="font-Fredericka">Email</p>
            <p className="font-Almendra  text-[#3861AF]">
              doquangphuc18102001@gmail.com
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center">
          <div className="mr-[50px] flex items-center">
            <img
              src={images.hotline}
              className="w-9 h-9 object-cover"
              alt="hotline"
            />
            <div className="flex flex-col font-medium p-2">
              <p className="font-Fredericka">Hotline</p>
              <p className="font-Almendra  text-[#3861AF]">0342246428</p>
            </div>
          </div>
          <Link to="/consultation" className="flex items-center">
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
        <div className="col-span-1 flex items-center">
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
