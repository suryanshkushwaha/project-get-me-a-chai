import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="first-section section flex flex-col gap-10 min-h-[400px] md:min-h-[600px] justify-center items-center px-4 py-20">
        <div className="headings justify-center flex flex-col items-center gap-5 text-center">
          <h1 className="font-bold text-4xl md:text-5xl flex items-center justify-center">Buy Me A Chai
            <Image className='invert-[.25]' src="/tea.gif" width={70} height={70} alt="" />
          </h1>
          <h2>A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</h2>
        </div>
        <div className="landing-buttons justify-center flex items-center">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="second-section section flex flex-col gap-10 min-h-[400px] md:min-h-[600px] justify-center items-center px-4 py-20">
        <h2 className="text-3xl font-bold text-center">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-start">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-start">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-start">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="third-section section flex flex-col gap-10 min-h-[400px] md:min-h-[600px] justify-center items-center px-4 py-20">
        <h2 className="text-3xl font-bold text-center">Learn more about us</h2>
        <iframe className="w-3/4 aspect-video" src="https://www.youtube.com/embed/laUWURssGQU?si=CCr8-lOGzs8bwt0b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
