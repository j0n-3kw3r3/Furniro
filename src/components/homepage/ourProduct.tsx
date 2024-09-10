
import { items } from '../shared/productData.ts';

export default function OurProduct() {

  return (
    <div>
      <section className="p-3 text-[#3A3A3A]">
        <h1 className='py-8 font-bold text-[2rem] md:text-[2.5rem] text-center'>Our Products</h1>

        <div className='flex gap-3 overflow-y-hidden overflow-x-auto w-full justify-start md:justify-center md:flex-wrap'>

          {items.map(item =>
            <div key={item.id} className=''>
              <div className="flex items-center justify-center">
                <div className=" imageandtext">
                  <div className="img  w-[17.1875rem] h-[18.8125rem]  bg-cover flex justify-end p-6" style={{ backgroundImage: `url(${item.img})` }}>
                    <div style={{display:`${item.offDisplay}`,backgroundColor:`${item.offColor}` }} className="bg-[] rounded-full w-[3.125rem] h-[3.125rem] pl-1 flex pt-3 text-white">{item.off}</div>



                  </div>
                  <div className="text p-[1.25rem] bg-[#F4F5F7] h-[9.0625rem]">
                    <h2 className="font-semibold   text-[24px]">{item.title}</h2>
                    <p className='py-2 text-[14.4px] text-[#898989]'>{item.discription}</p>
                    <div className='flex justify-between'>

                      <h2 className="font-semibold inline   text-[16px]">{'Rp ' + item.price}</h2>
                      <span className='line-through text-[#B0B0B0]'>{item.slashPrice}</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
          <div className='flex justify-center pt-10'>
            <button  className='border border-primary w-[205px] h-[40px] text-primary'>Show More</button>
          </div>
      </section>
    </div>
  )
}

