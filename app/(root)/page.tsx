import Image from "next/image";
import "./page.css";

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
        <div id="glass" className="flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl libre-baskerville-regular">thesuit</h1>
            <span className="text-xs md:text-sm tracking-widest md:tracking-wide flex justify-center gap-2">
              <span>threads</span>
              <span>and</span>
              <span>hands</span>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-5xl text-center tracking-[12] md:text-7xl md:tracking-[28]">COMING SOON</div>
            <form
              action="https://formsubmit.co/attiquerehmansahito@gmail.com"
              method="POST"
              className="flex flex-col md:flex-row items-center justify-center w-full mx-auto text-sm gap-2"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white text-black min-w-[250px] text-xs md:text-base md:min-w-sm"
                placeholder="Email here"
                required
                style={{
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '20px',
                  borderRadius: '20px',
                }}
              />
              <button
                type="submit"
                className="bg-[#531518] text-white hover:opacity-80 hover:cursor-pointer"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  borderRadius: '20px',
                }}
              >
                Notify Me
              </button>
            </form>
          </div>

          <div className="flex gap-2">
          <a href="https://www.instagram.com/thesu.it/" target="_blank" rel="noopener noreferrer">
              <Image src="/fb.png" alt="Facebook Logo" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/thesu.it/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="Instagram Logo" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
