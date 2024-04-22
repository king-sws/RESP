import { Nav } from "../contants/Nav"

const Footer = () => {
  return (
    <section >
        <div className="paddings innerWidth relative">
            <div className="grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 items-center ">
                <div className="flex flex-col mb-5 justify-center items-center">
                    <img src="./logo2.png" alt="A" width={100}  />
                    <p className='paragraph' >Our vision is to make all people</p>
                    <p className='paragraph' >the best place to live for them</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-center items-center mb-5">
                        <h1 className='big-text' >Information</h1>
                        <p className='paragraph' >145 New York,FL 5467,USA</p>
                    </div>
                    <div className="flex gap-4">
                        {Nav.map((link , i)=>(
                            <div className="" key={i} >
                                <a href={`${link}`} className='gig text-[11px] lg:text-[18px] mg:text-[15px] ' > {link} </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer