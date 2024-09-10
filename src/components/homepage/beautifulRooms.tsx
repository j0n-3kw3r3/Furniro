
import inspiration1 from '../../assets/inspiration1.png'
import inspiration2 from '../../assets/inspiration2.png'
import inspiration3 from '../../assets/inspiration3.png'

export default function BeautifulRooms() {
  return (
    <div>
      <section className=' flex  h-[600px] bg-[#FCF8F3] w-full'>
        <div className="flex  justify-between items-center w-full ">

          <div className="w-[450px] p-4  ">
            <h1 className="text-[2rem] font-bold">
              50+ Beautiful rooms
              inspiration
            </h1>
            <p className="text-[1rem] text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <div className="mt-[20px] "><button className="bg-primary text-white px-6 py-2 ">Explore More</button></div>


          </div>
          <div className="flex gap-4 ">
            <div style={{ backgroundImage: `url(${inspiration1})` }} className="p-10 flex items-end w-[354px] h-[510px] bg-cover  ">
              <div className="bg-[#FFFFFFB8] p-7">
              <p className='text-[.9rem] text-[#616161]'>01 - Bed Room</p>
              <h1 className='text-[1.25rem] font-semibold pt-1'>Inner Peace</h1>
              </div>
              <button className='bg-primary text-white px-3 py-2' >{"->"}</button>
              
            </div>
            <div className='flex flex-col  '>
              <div className="flex gap-4">
                <div style={{ backgroundImage: `url(${inspiration2})` }} className="bg-cover w-[334px] h-[430px] "></div>
                <div style={{ backgroundImage: `url(${inspiration3})` }} className="bg-cover w-[48px] h-[430px] "></div>
              </div>
              <div className=" my-auto flex gap-2">
                <div className=" flex justify-center items-center rounded-full w-6   h-6 border  border-primary ">

                  <div className="rounded-full w-3   h-3 bg-primary   ">

                  </div>

                </div>
                <div className=" flex justify-center items-center rounded-full w-6   h-6 hover:border  border-primary ">

                  <div className="rounded-full w-3 bg-[#D8D8D8]  h-3 hover:bg-primary   ">

                  </div>

                </div>               
                <div className=" flex justify-center items-center rounded-full w-6   h-6 hover:border  border-primary ">

                  <div className="rounded-full w-3 bg-[#D8D8D8]  h-3 hover:bg-primary   ">

                  </div>

                </div>               
                <div className=" flex justify-center items-center rounded-full w-6   h-6  hover:border  border-primary ">

                  <div className="rounded-full w-3  bg-[#D8D8D8] h-3 hover:bg-primary   ">

                  </div>

                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
