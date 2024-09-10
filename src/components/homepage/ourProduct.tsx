
import { items } from '../shared/productData.ts';

export default function OurProduct() {

  return (
    <div>
      <section className="p-3 text-[#3A3A3A]">
        <h1 className='py-8 font-bold text-[40px] text-center'>Our Products</h1>

        <div className='flex gap-3 overflow-y-hidden overflow-x-auto w-full justify-start md:justify-center md:flex-wrap'>

          {items.map(item =>
            <div key={item.id} className=''>
              <div className="flex items-center justify-center">
                <div className=" imageandtext">
                  <div className="img  w-[275px] h-[301px]  bg-cover flex justify-end p-6" style={{ backgroundImage: `url(${item.img})` }}>
                    <div style={{display:`${item.offDisplay}`,backgroundColor:`${item.offColor}` }} className="bg-[] rounded-full w-[50px] h-[50px] pl-1 flex pt-3 text-white">{item.off}</div>



                  </div>
                  <div className="text p-[20px] bg-[#F4F5F7] h-[145px]">
                    <h2 className="font-semibold   text-[1.5rem]">{item.title}</h2>
                    <p className='py-2 text-[0.9rem] text-[#898989]'>{item.discription}</p>
                    <div className='flex justify-between'>

                      <h2 className="font-semibold inline   text-[1rem]">{'Rp ' + item.price}</h2>
                      <span className='line-through text-[#B0B0B0]'>{item.slashPrice}</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
          <div className='flex justify-center pt-10'>
            <button  className='border border-primary w-[12.8125rem] h-[2.5rem] text-primary'>Show More</button>
          </div>
      </section>
    </div>
  )
}

