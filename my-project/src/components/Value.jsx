import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="bg-slate-100 p-3 mb-6 shadow rounded-xl">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-blue-900" >Best interest rates on the market</AccordionHeader>
        <AccordionBody className="text-gray-600 bor  " >
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </AccordionBody>
      </Accordion>
    </div>
    <div className="bg-slate-100 p-3 mb-6 shadow rounded-xl">
      <Accordion open={open === 2} icon={<Icon id={2} open={open} className='bg-black' />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-blue-900" >
        Prevent unstable prices
        </AccordionHeader>
        <AccordionBody className="text-gray-600 bor">
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </AccordionBody>
      </Accordion></div>
      <div className="bg-slate-100 p-3 mb-6 shadow rounded-xl">
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-blue-900" >
        Best price on the market
        </AccordionHeader>
        <AccordionBody className="text-gray-600 bor">
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </AccordionBody>
      </Accordion></div>
    </>
  );
}

const Value = () => {
  return (
    <section id='Our Value' >
        <div className="paddings innerWidth relative ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start">
                <img src="./value.png" alt="" className="img-container" />
                <div className="flex flex-col p-5">
                    <span className="min-text" >Our Value</span>
                    <span className="big-text" >Value We Give You</span>
                    <span className="paragraph " >We always ready to help by providijng the best for you</span>
                    <span className="paragraph " >We beleive a good blace to live can make your life better</span>
                
                    <div className="mt-6 ">
                        <AccordionCustomIcon />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Value
