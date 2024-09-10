
export default function FooterHome() {
  return (
    <div>
      <section className="mt-10 border-t  py-10 px-[7%]">
        <div className=" justify-between border-b py-10 md:py-0 md:h-[302px] gap-10 flex-col flex md:gap-0 md:flex-row">
          <div className="text-center md:text-left flex flex-col  ">
            <h1 className="basis-[20%] font-bold text-[1.5rem] " >Funiro.</h1>
            <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
          </div>
          <div className="text-center font-medium md:text-left flex flex-col  gap-2 md:gap-0  ">
            <div className="basis-[20%] text-[1.5rem] md:text-[1rem] font-bold md:font-medium md:text-[#9F9F9F]">Links</div>
            <div className="basis-[20%]  ">Home</div>
            <div className="basis-[20%] ">Shop</div>
            <div className="basis-[20%] ">About</div>
            <div className="basis-[20%] ">Contact</div>

          </div>
          <div className="text-center md:text-left flex flex-col font-medium  gap-2 md:gap-0">
            <div className="basis-[20%] text-[1.5rem] md:text-[1rem] font-bold md:font-medium md:text-[#9F9F9F]">Help</div>
            <div className="basis-[20%] ">Payment Options</div>
            <div className="basis-[20%]">Returns</div>
            <div className="basis-[20%]">Privacy Policies</div>

          </div>
          <div className="text-center md:text-left flex flex-col font-medium   gap-4 md:gap-0">
            <div className="basis-[20%] text-[1.5rem] md:text-[1rem] font-bold md:font-medium md:text-[#9F9F9F]">Newsletter</div>
            <div className="basis-[20%]  gap-4">
              <input className="border-b md:border-b-2 border-black md:pr-4 md:mr-4" type="email" name="" id="" placeholder="Enter Your Email Address" />
              <button className="border-b-2 mt-5 md:mt-0 border-black">SUBSCRIBE</button>
            </div>

          </div>
        </div>
        <div className="mt-10 text-center md:text-left">2023 furino. All rights reverved</div>
      </section>
    </div>
  )
}
