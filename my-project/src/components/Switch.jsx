import data from '../contants/sider.json'
// Import Swiper React components
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import { sliderSettings } from '../contants/comm';
import { SquareArrowRight , SquareArrowLeft } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';

const SlideB = ()=>{
    const swiper = useSwiper();
    return (
        <div className="btn">
            <button  onClick={()=> swiper.slidePrev()} > <SquareArrowLeft  color='#1f3e72' className='transition wi duration-150 ease-in-out  delay-150 hover:-translate-x-1 hover:scale-110 ' /> </button>
            <button  onClick={()=> swiper.slideNext()} > <SquareArrowRight  color='#1f3e72' className='transition wi duration-150 ease-in-out  delay-150 hover:translate-x-1 hover:scale-110 ' /> </button>
        </div>
    )
}

const Switch = () => {
  return (
    <section id='Residencies' className=''>
      <div className="paddings innerWidth relative overflow-hidden ">
        <div className="relative">
            <div className="flex flex-col">
              <span className="min-text">Best Choices</span>
              <span className='big-text'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings} >
                <SlideB />
                    <div className="grid grid-cols-4 gap-8 py-4">
                        {data.map((link , index)=>(
                            <SwiperSlide key={index} >
                            <div className="flex flex-col gap-3 p-4 items-center hover:bg-slate-300 rounded-xl cursor-pointer sc " >
                                <img src={link.image} alt="H" className='swiper' />
                                <div className="flex flex-col">
                                    <p className='text-slate-500' > <span className='text-orange-500 font-bold ' >$</span> {link.price} </p>
                                    <h1 className='text-blue-800 font-semibold  text-3xl' > {link.name} </h1>
                                    <p className='text-slate-400 max-w-[280px] ' > {link.detail} </p>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </div>
            </Swiper>
            </div>
        </div>
    </section>
  );
}

export default Switch;