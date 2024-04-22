
const Companies = () => {
  return (
    <div className="paddings innerWidth ">
        <div className=" grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 mt-10    sm:grid-cols-2">
            <img src="./prologis.png" alt="h" className="w-[150px] h-auto text-center mb-6 " />
            <img src="./tower.png" alt="h" className="w-[150px] h-auto text-center mb-6 " />
            <img src="./equinix.png" alt="h" width={200} height={200} />
            <img src="./realty.png" alt="h" width={200} height={200} />
        </div>
    </div>
  )
}

export default Companies