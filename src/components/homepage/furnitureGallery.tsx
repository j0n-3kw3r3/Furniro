import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import gallery5 from '../../assets/gallery5.png'
import gallery6 from '../../assets/gallery6.png'
import gallery7 from '../../assets/gallery7.png'
import gallery8 from '../../assets/gallery8.png'
import gallery9 from '../../assets/gallery9.png'

export default function FurnitureGallery() {
  return (
    <div>
      <div className='text-center my-10'>
        <p>Share your setup with</p>
        <h1 className="text-[2rem] font-bold ">#FuniroFurniture</h1>
      </div>
      <div className="flex flex-row gap-4 ">
        {/* # First four images */}

        <div className='flex flex-col gap-4 basis-[40%]'>
          <div className='flex items-baseline gap-4 '>
            <div className='basis-2/12 h-[360px] bg-cover' style={{ backgroundImage: `url(${gallery1})` }}></div>
            <div className='basis-10/12 h-[290px] bg-cover ' style={{ backgroundImage: `url(${gallery2})` }}></div>

          </div>
          <div className='flex flex-row gap-4 '>
            <div className='basis-4/12 h-[300px] bg-cover' style={{ backgroundImage: `url(${gallery3})` }}></div>
            <div className='basis-8/12 h-[200px] bg-cover' style={{ backgroundImage: `url(${gallery4})` }}></div>
          </div>
        </div>

        {/* #Middle image */}
        <div className="basis-[20%] flex ">

        <div className="my-auto w-[250px] h-[340px] bg-contain bg-no-repeat  " style={{ backgroundImage: `url(${gallery5})` }}></div>
        </div>

        {/* #Last four images */}

        <div className=' flex flex-col gap-4 basis-[40%]'>

          <div className='flex items-baseline gap-4  '>
            <div className='basis-[54%] h-[300px] bg-cover' style={{ backgroundImage: `url(${gallery6})` }}></div>
            <div className='basis-[46%] h-[360px] bg-cover ' style={{ backgroundImage: `url(${gallery7})` }}></div>
          </div>
          <div className="flex gap-4">
          <div className='basis-[34%] h-[220px] bg-cover' style={{ backgroundImage: `url(${gallery8})` }}></div>
          <div className='basis-[50%] h-[180px] bg-cover ' style={{ backgroundImage: `url(${gallery9})` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
