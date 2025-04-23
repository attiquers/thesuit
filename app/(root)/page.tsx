import Image from "next/image";
import "./page.css";

import { Montserrat, Libre_Baskerville } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});


export default function Home() {
  return (
    <div className="page-container">
      {/* <Image
        src="/background.jpg"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="background-image"
      /> */}

      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />



      <div className="wrapper absolute">
        <div id="glass" className="flex flex-col gap-10 ">
          <div className="text-center ">
            <h1 className="text-4xl md:text-5xl libre-baskerville-regular">thesuit</h1>
            <span className="text-[10px] md:text-sm tracking-widest flex justify-center gap-2"> 
              <span>threads</span>
              <span>and</span>
              <span>hands</span>
            </span>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="text-5xl text-center tracking-[12] md:text-7xl md:tracking-[28]">COMING SOON</div>
            <form action="" method="post" 
              className="flex flex-col md:flex-row items-center justify-center w-full  mx-auto text-sm gap-2 "
              >
              <input 
                type="email" 
                name="" 
                id="" 
                className="bg-white text-black " 
                placeholder="Email here" 
                style={{ 
                  paddingTop: '8px', 
                  paddingBottom: '8px', 
                  paddingLeft:'20px',
                  borderRadius: '20px', 
                }} 
              />


              <button 
                type="submit" 
                className="bg-[#531518] text-white" 
                style={{ 
                  paddingTop: '10px', 
                  paddingBottom: '10px', 
                  paddingLeft:'20px',
                  paddingRight:'20px',
                  borderRadius: '20px', 
                }} 
              > 
              Notify Me
              </button>



            </form>
          </div>

          <div className=" flex gap-2">
                  <Image src="/fb.png" alt="fblogo" width={30} height={30}/>
                  <Image src="/insta.png" alt="fblogo" width={30} height={30}/>
          </div>
        </div>
      </div>
    </div>
  );
}
