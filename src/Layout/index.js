import { useEffect, useState } from 'react';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import { getRequest } from '../api/api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function PublicLayout({ children }) {
  const [topBanner, setTopBanner] = useState()
  useEffect(()=>{
    getTopBanner()
  },[])
  const getTopBanner = async ()=>{
    const data = await getRequest('/home-manager/get-banner?type=1')
    setTopBanner(data.data)
  }
  return (
    <div>
      <Header />
      {topBanner ? 
        <Carousel autoPlay showArrows={true} showThumbs={false}>
          {topBanner.map((item,index)=>(
            <img src={item.image} key={index} alt='banner' className='object-cover lg:h-[350px] h-[250px] w-full'/>
          ))}
        </Carousel> :<></>}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default PublicLayout;
