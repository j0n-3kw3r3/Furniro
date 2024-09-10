import React from 'react'
import range1 from '../../assets/range1.png'
import range2 from '../../assets/range2.png'
import range3 from '../../assets/range3.png'

export default function TheRange() {
  const items = [
    {
      id:1,
      img: range1,
      title:'Dining',
    },
    {
      id:2,
      img: range2,
      title:'Living',
    },
    {
      id:3,
      img: range3,
      title:'Bedroom',
    }
  ]
  return (
    <div>
      <div className='mt-14 flex justify-start  gap-3 overflow-y-hidden overflow-x-auto w-full md:justify-center '>

      {items.map(item=>
        <div key={item.id} className=''>
               <div className="flex items-center justify-center">
        <div className="n imageandtext">
          <div className="img bg-blue-500 w-[381px] h-[480px] rounded-xl bg-cover bg-center md:w-[351px]" style={{ backgroundImage: `url(${item.img})` }}></div>
          <h2 className="font-semibold text-center py-6 text-[1rem]">{item.title}</h2>
          
        </div>
      </div> 
        </div>
      )}
     
        </div>
    </div>
  )
}

