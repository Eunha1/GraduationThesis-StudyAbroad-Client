import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
function Destination() {
  return (
    <div>
      <div className="flex justify-between py-2 px-[70px]">
        <div className="flex flex-col">
          <p className="m-[10px] text-lg font-Almendra not-italic font-medium">
            Châu Âu
          </p>
          <div className="grid grid-cols-2 gap-x-2.5">
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italicfont-medium p-2 hover:underline hover:text-sky-500">
                Anh
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Hà Lan
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Đức
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Pháp
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Bỉ
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Italia
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2  font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Hungary
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="m-[10px] text-lg font-Almendra">Châu Úc</p>
          <div>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Australia
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                New Zealand
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="m-[10px] text-lg font-Almendra">Châu Á</p>
          <div className="grid grid-rows-2 gap-[40px]">
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Hàn Quốc
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Nhật Bản
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Hồng Kông
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Trung Quốc
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Đài Loan
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="m-[10px] text-lg font-Almendra">Châu Mỹ</p>
          <div>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Hoa Kỳ
              </span>
            </Link>
            <Link className="flex items-center no-underline text-slate-800 ">
              <ChevronRightIcon fontSize="small" />
              <span className="flex-1 ml-2 font-Almendra not-italic font-medium p-2 hover:underline hover:text-sky-500">
                Canada
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
