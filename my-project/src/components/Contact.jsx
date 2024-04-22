import { Phone ,  MessageCircle, Video, Mail } from 'lucide-react';

const Card = () => {
  return (
  <div className='grid grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  cursor-pointer flex-wrap justify-center  p-2 '  >
    <div className="flex-1  shadow-md flex-col items-center justify-center p-4 m-2 bg-gray-100 rounded w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div className="flex gap-4 items-start justify-start ">
        <div className="">
            <Phone color="blue" className=" w-10 h-10 mb-2 bg-slate-200  rounded-[6px] p-[5px] "/>
        </div>
        <div className="flex flex-col ">
            <h2 className="text-xl text-sky-900 font-semibold"> Call </h2>
            <p className="mb-4 font-light text-[8px] lg:text-[10px] text-gray-500">021 123 145 14</p>
        </div>
    </div>
      <button className="px-4 py-2 mt-3 w-full text-white bg-blue-500 hover:bg-blue-400 rounded">Call now</button>
  </div>

  <div className="flex-1  shadow-md flex-col items-center justify-center p-4 m-2 bg-gray-100 rounded w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div className="flex gap-4 items-center ">
    <div className="">
            <MessageCircle color="blue" className=" w-10 h-10 mb-2 bg-slate-200  rounded-[6px] p-[5px] "/>
        </div>
        <div className="flex flex-col ">
            <h2 className="  text-lg text-sky-900 font-semibold"> Chat </h2>
            <p className="mb-4 font-light text-[8px] lg:text-[10px] text-gray-500">021 123 145 14</p>
        </div>
      </div>
      <button className="px-4 w-full py-2 mt-3 text-white bg-blue-500 hover:bg-blue-400 rounded">Chat Call </button>
    </div>

    <div className="flex-1 shadow-md flex-col items-center justify-center p-4 m-2 bg-gray-100 rounded w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div className="flex gap-4 items-center ">
    <div className="">
            <Video color="blue" className=" w-10 h-10 mb-2 bg-slate-200  rounded-[6px] p-[5px] "/>
        </div>
        <div className="flex flex-col ">
            <h2 className="  text-sm text-sky-900 font-semibold">Video Call </h2>
            <p className="mb-4 font-light text-[8px] lg:text-[10px] text-gray-500">021 123 145 14</p>
        </div>
      </div>
      <button className="px-4 w-full py-2 mt-3 text-white bg-blue-500 hover:bg-blue-400 rounded">Video Call </button>
    </div>

    <div className="flex-1 shadow-md flex-col items-center justify-center p-4 m-2 bg-gray-100 rounded w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div className="flex gap-4 items-center ">
    <div className="">
            <Mail color="blue" className=" w-10 h-10 mb-2 bg-slate-200  rounded-[6px] p-[5px] "/>
        </div>
        <div className="flex flex-col ">
            <h2 className="  text-lg text-sky-900 font-semibold"> Mail </h2>
            <p className="mb-4 font-light text-[8px] lg:text-[10px] text-gray-500">021 123 145 14</p>
        </div>
      </div>
      <button className="px-4 w-full py-2 mt-3 text-white bg-blue-500 hover:bg-blue-400 rounded">Message </button>
    </div>
    </div>
  );
};
const Contact = () => {
  return (
    <section id="Contact Us" className="">
        <div className="paddings innerWidth relative">
            <div className="flex justify-center items-center flex-wrap">
                <div className='flex flex-col' >
                <span className='min-text' >Our Contact Us</span>
                <span className='big-text' >Easy to contact us</span>
                <span className="paragraph" >We always ready to help by providing the best services to you. We believe a good place to live can make your life better.</span>
                <div className="flex justify-center w-full flex-wrap">
                    <Card />
                </div>
                </div>
                <div className="flex justify-center">
                    <img src="./contact.jpg" alt="g" className='img-container' />
                </div>
            </div>
        </div>
    </section>
  )
}


export default Contact