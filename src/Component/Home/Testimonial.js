import { useEffect, useState } from 'react';
import images from '../../assets/images';
import { getRequest } from '../../api/api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Testimonial() {
  const [testimonial, setTestimonial] = useState();
  useEffect(() => {
    getListTestimonial();
  }, []);
  const getListTestimonial = async () => {
    const data = await getRequest('/home-manager/list-testimonial');
    setTestimonial(data.data);
  };
  return (
    <div className="mt-[100px]">
      <div className="h-[600px] w-full relative">
        <img
          src={images.bg_testimonial}
          alt="background"
          className="h-full w-full"
        />
        <div className="absolute z-10 top-3 left-10 right-10">
          <div className="h-full w-full py-[10px] px-[60px] flex flex-col ">
            <div className="flex justify-center">
              <p className="text-white font-bold text-2xl ">
                Lời ngỏ của các học sinh HustEDU
              </p>
            </div>
            {testimonial ? (
              <Carousel autoPlay showArrows={true} showThumbs={false}>
                   { testimonial.map((item, index) => (
                    <div className="w-[500px]" key={index}>
                      <div className="border rounded-xl bg-invisible text-white">
                        <p className="p-10 italic">{item.content}</p>
                      </div>
                      <div className="flex mt-[20px]">
                          <img
                            src={item.image}
                            alt="image"
                            className="max-w-[100px] min-w=[100px] max-h-[100px] min-h-[100px] rounded-[50%] object-cover"
                          />
                        <div className="flex flex-col ml-4 text-white py-2">
                          <p className="font-bold text-xl">{item.name}</p>
                          <p className="font-light text-sm italic">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
