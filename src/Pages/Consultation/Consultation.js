import { CircularProgress, MenuItem, Select, TextField } from '@mui/material';
import Breadcrumb from '../../Component/Breadcrumb';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../api/api';
import { toast } from 'react-toastify';
import LeftMenu from '../../Component/Menu/LeftMenu';
import { Link } from 'react-router-dom';
function Consultation() {
  const title = 'Đăng kí tư vấn du học';
  const listBreadcrumb = [
    {
      src: '/',
      title: 'Trang chủ',
    },
    {
      isCurrentPage: true,
      src: '/consultation',
      title: 'Đăng kí tư vấn',
    },
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const validateSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email là bắt buộc'),
    phone: yup.string('Enter your phone').required('Số điện thoại là bắt buộc'),
    name: yup.string('Enter your name').required('Họ tên là bắt buộc'),
    address: yup.string('Enter your address').required('Địa chỉ là bắt buộc'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      address: '',
      level: '',
      destination: [],
      question: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      const body = {
        email: values.email,
        phone: values.phone,
        name: values.name,
        address: values.address,
        level: values.level,
        destination: values.destination.toString(),
        question: values.question,
      };
      const data = await postRequest('/customer/advise-info', body);
      if (data.status === 0) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        localStorage.setItem('advise-info', JSON.stringify(data.data));
      }
    },
  });
  const listLevel = [
    { id: 1, level: 'THPT' },
    { id: 2, level: 'Đại học' },
    { id: 3, level: 'Thạc sĩ' },
    { id: 4, level: 'Tiến sĩ' },
  ];
  const [listDestination, setListDestination] = useState();
  useEffect(() => {
    getListDestination();
  }, []);

  const getListDestination = async () => {
    try {
      const data = await getRequest('/locality/get-destination');
      setListDestination(data.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <div>
      <div className="lg:ml-[100px] mx-[10px]">
        <div className="mt-[20px] ">
          <Breadcrumb title={title} listBreadcrumb={listBreadcrumb} />
        </div>
        {localStorage.getItem('advise-info') ? (
          <div className="flex items-center justify-center">
            <div className="p-4 rounded shadow-lg ring ring-indigo-600/50">
              <div className="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 w-28 h-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-4xl font-bold">Thank You !</h2>
                <p>
                  {' '}
                  Cảm ơn bạn đã sử dụng dịch vụ đăng kí tư vấn của chúng tôi.
                  Chúng tôi sẽ sớm liên hệ với bạn
                </p>
                {/* eslint-disable-next-line */}
                <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <Link className="text-sm font-medium" to='/'>Home</Link>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <LeftMenu />
            <form
              className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 md:w-[700px] w-[350px] h-auto"
              onSubmit={formik.handleSubmit}
            >
              <div className="grid grid-cols-2 gap-[50px] py-2">
                <div className="flex flex-col col-span-1">
                  <label htmlFor="name" className="py-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <TextField
                    type="text"
                    name="name"
                    variant="outlined"
                    label="Enter name"
                    placeholder="Họ và tên"
                    size="small"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </div>
                <div className="flex flex-col col-span-1 ">
                  <label htmlFor="phone" className="py-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <TextField
                    type="number"
                    name="phone"
                    variant="outlined"
                    label="Enter phone"
                    placeholder="Số điện thoại"
                    size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </div>
              </div>
              <div className="flex flex-col py-1">
                <label htmlFor="email" className="py-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <TextField
                  type="email"
                  name="email"
                  variant="outlined"
                  label="Enter email"
                  placeholder="Email"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="flex flex-col py-1">
                <label htmlFor="address" className="py-1">
                  Bạn đang sống ở đâu <span className="text-red-500">*</span>
                </label>
                <TextField
                  type="text"
                  name="address"
                  variant="outlined"
                  label="Enter address"
                  placeholder="Bạn đang sống ở đâu"
                  size="small"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  fullWidth
                />
              </div>
              <div className="flex flex-col py-1">
                <label htmlFor="level" className="py-1">
                  Trình độ học vấn mà bạn quan tâm{' '}
                  <span className="text-red-500">*</span>
                </label>
                <TextField
                  size="small"
                  select
                  label="Choose level"
                  placeholder="Trình độ học vấn"
                  value={formik.values.level}
                  onChange={(event) =>
                    formik.setFieldValue('level', event.target.value)
                  }
                  fullWidth
                >
                  {listLevel.map((option, index) => (
                    <MenuItem key={index} value={option.level}>
                      {option.level}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="flex flex-col py-1">
                <label htmlFor="destination" className="py-1">
                  Điểm đến bạn quan tâm <span className="text-red-500">*</span>
                </label>
                <Select
                  multiple
                  size="small"
                  MenuProps={MenuProps}
                  value={formik.values.destination}
                  onChange={(event) =>
                    formik.setFieldValue('destination', event.target.value)
                  }
                >
                  {listDestination ? (
                    listDestination?.map((item, index) => (
                      <MenuItem key={index} value={item.country}>
                        {item.country}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>
                      <CircularProgress />
                    </MenuItem>
                  )}
                </Select>
              </div>
              <div className="flex flex-col py-1">
                <label htmlFor="question" className="py-1">
                  Câu hỏi cho chúng tôi
                </label>
                <TextField
                  type="text"
                  variant="outlined"
                  name="question"
                  multiline
                  rows={4}
                  label="Enter question"
                  placeholder="Câu hỏi cho chúng tôi"
                  fullWidth
                  value={formik.values.question}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mt-3 flex justify-center items-center">
                <button
                  className=" text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-base px-3 py-2 text-center"
                  type="submit"
                >
                  Đăng kí
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Consultation;
