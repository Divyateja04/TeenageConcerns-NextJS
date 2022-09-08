import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-violet-900 flex flex-col-reverse md:flex-row px-4 py-4 items-center justify-center text-center align-middle h-screen">
      <div>
        <span className="font-QuickSand text-6xl text-white">TEENAGE CONCERNS</span>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10"/>
        <div>
          <Link href={'/user/login'}><button type="button" className="text-white border-2 border-gray-300 hover:bg-violet-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Anonymous User Login</button></Link>
          <Link href={'/user/register'}><button type="button" className="text-white border-2 border-gray-300 hover:bg-violet-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Anonymous User Register</button></Link>
          <br />
          <Link href={'/mentor/login'}><button type="button" className="text-white border-2 border-gray-300 hover:bg-violet-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Mentor Login</button></Link>
          <Link href={'/mentor/register'}><button type="button" className="text-white border-2 border-gray-300 hover:bg-violet-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Mentor Register</button></Link>
        </div>
      </div>
      <img src={'/theHead.png'} className="mr-4 md:w-96 w-80"/>
    </div>
  )
}
