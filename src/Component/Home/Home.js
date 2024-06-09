import { useEffect, useState } from 'react';
import Brand from './Brand';
import Intro from './Intro';
import NewsSeminor from './NewsSeminor';
import Testimonial from './Testimonial';
import { getRequest } from '../../api/api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Home() {
  const [bottomBanner, setBottomBanner] = useState()
  useEffect(()=>{
    getBottomBanner()
  },[])
  const getBottomBanner = async ()=>{
    const data = await getRequest('/home-manager/get-banner?type=2')
    setBottomBanner(data.data)
  }
  return (
    <div>
      <Intro />
      <NewsSeminor />
      <Testimonial />
      <Brand />
      {bottomBanner ? <div className='mt-[50px]'>
        <Carousel autoPlay showArrows={true} showThumbs={false}>
          {bottomBanner.map((item,index)=>(
            <img src={item.image} key={index} alt='banner' className='object-cover h-[500px] w-full'/>
          ))}
        </Carousel>
      </div>: <></>}
    </div>
  );
}

export default Home;
