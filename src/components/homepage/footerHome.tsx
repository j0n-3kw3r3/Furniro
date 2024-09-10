
export default function FooterHome() {
  return (
    <div>
      <section className="mt-10 border-t  py-10 px-[7%]">
        <div className="flex justify-between border-b  h-[302px] ">
          <div className=" flex flex-col class ">
            <h1 className="basis-[20%] font-bold text-[1.5rem] " >Funiro.</h1>
            <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
          </div>
          <div className=" flex flex-col font-medium ">
            <div className="basis-[20%] text-[#9F9F9F]">Links</div>
            <div className="basis-[20%] ">Home</div>
            <div className="basis-[20%] ">Shop</div>
            <div className="basis-[20%] ">About</div>
            <div className="basis-[20%] ">Contact</div>

          </div>
          <div className="flex flex-col font-medium ">
            <div className="basis-[20%] text-[#9F9F9F]">Help</div>
            <div className="basis-[20%] ">Payment Options</div>
            <div className="basis-[20%]">Returns</div>
            <div className="basis-[20%]">Privacy Policies</div>

          </div>
          <div className="flex flex-col font-medium ">
            <div className="basis-[20%] text-[#9F9F9F]">Newsletter</div>
            <div className="basis-[20%]  gap-4">
              <input className="border-b-2 border-black pr-4 mr-4" type="email" name="" id="" placeholder="Enter Your Email Address" />
              <button className="border-b-2 border-black">SUBSCRIBE</button>
            </div>

          </div>
        </div>
        <div className="mt-10">2023 furino. All rights reverved</div>
      </section>
    </div>
  )
}
