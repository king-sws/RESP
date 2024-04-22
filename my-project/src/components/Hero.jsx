import { MapPin } from 'lucide-react';
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
<section id='Home' className="bg-[var(--black)] w-full  relative  lg:p-8 md:p-6 sm:p-1 ">
        <div className="innerWidth paddings flex flex-col sm:flex-col md:flex-row md:gap-24 justify-between items-center">            <div className="">
                <div className="relative ">
                    <div className="boll" />
                    <div className="white-boll " />
                    <motion.h1 initial={{y : '2rem' , opacity : 0}} animate={{y:0 , opacity: 1}} transition={{duration:2, type:'spring'}} className="hello"> Dicover <br/>
                    Most Suitable <br />Proerty </motion.h1>
                    </div>
                    <div className="flex flex-col mt-9">
                        <span className="capitalize sppan" >find a variety of properties that suit you very easilly</span>
                        <span className="capitalize sppan">forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flex mt-9 relative mb-10 ">
                    <MapPin  color='blue' size={30} className='mr-2 absolute top-1 ml-1 ' />
                    <input type="text" className="rounded p-2 pl-10 w-full text-black flex-grow" placeholder="Search..."/>
                    <button type="submit" className="ml-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white">Search</button>
                    </div>
                    <div className="grid grid-cols-3 gap-10 flex-wrap mb-5 lg:justify-start md:justify-center sm:justify-center  ">
                        <div className="">
                        <p className='font-bold text-[21px] lg:text-[27px] md:text-[22px] sm:text-[20px]'> 
                                <CountUp start={11900} end={12000} duration={4} />
                            <span className='text-blue-500' >+</span>
                            </p>                            
                            <span className='text-xs text-slate-400' >Premium Product</span>
                        </div>
                        <div className="">
                            <p className='font-bold text-[21px] lg:text-[27px] md:text-[22px] sm:text-[20px]'> 
                                <CountUp start={5900} end={6000} duration={4} />
                            <span className='text-blue-500' >+</span>
                            </p>
                            <span className='text-xs text-slate-400' >Happy Customer</span>
                        </div>
                        <div className="">
                        <p className='font-bold text-[21px] lg:text-[27px] md:text-[22px] sm:text-[20px]'> 
                                <CountUp end={210} />
                            <span className='text-blue-500' >+</span>
                            </p>
                            <span className='text-xs text-slate-400' >Awards Winning</span>
                        </div>
                    </div>
            </div>
            <div className="img-container">
                <div className="img-w">
                    <img src="./hero-image.png" alt="H" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero