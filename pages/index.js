export default function Home() {
  {
    //i am not using the <Image /> nor the <Link /> like I normally do in nextjs because this is a tutorial for html
    //change all class to className to use as html
  }
  return(
    <div className="flex flex-col text-white pb-10">
      <div className="bg-white border-b-2 border-zinc-300 pb-4">
        <div className="bg-black px-5 pt-4 h-auto flex flex-col space-y-4">
              <div className="w-full bg-black flex justify-between">
                <div className="flex items-center space-x-2 sm:hidden">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <h1 className="text-white font-semibold text-xl uppercase">Menu</h1>
                </div>
                <div className="items-center space-x-2.5 hidden sm:flex">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101136903%2Fg0HwoLyO7.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                    className="w-12 h-12 rounded-full hover:cursor-pointer"
                  />
                  <h1 className="text-2xl text-white font-semibold hover:cursor-pointer">Victor Omorogbe</h1>
                </div>
                <div className="flex items-center h-full sm:space-x-4">
                  <div className="hover:bg-[rgba(194,194,194,0.2)] hover:cursor-pointer hover:rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="hover:bg-[rgba(194,194,194,0.2)] hover:cursor-pointer hover:rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div className="hover:bg-[rgba(194,194,194,0.2)] hover:cursor-pointer hover:rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="hover:cursor-pointer">
                    <img
                      src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101136903%2Fg0HwoLyO7.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                      className="w-auto h-auto max-w-12 max-h-12 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-2xl font-semibold flex justify-center sm:hidden">Victor Omorogbe</div>
              <div className="flex space-x-5">
                <div className="group hover:bg-[rgba(194,194,194,0.2)] px-3 pt-3 rounded-t-md hover:cursor-pointer">
                  <div className="text-white group-hover:text-white text-lg font-semibold hover:cursor-pointer uppercase">Home</div>
                </div>
                <div className="hover:text-white group hover:bg-[rgba(194,194,194,0.2)] px-3 pt-3 rounded-t-md hover:cursor-pointer">
                  <div className="text-[#ffffff79] group-hover:text-white text-lg font-semibold hover:cursor-pointer uppercase">Badges</div>
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between mx-8 sm:space-x-5 space-y-5 sm:space-y-0 mt-10">
              <div className="flex flex-col sm:flex-1 space-y-2">
                <div>
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101377623%2FqPkdpmqtC.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                    className="rounded-lg hover:opacity-80 hover:cursor-pointer" />
                    <h1 className="text-zinc-800 text-xl lg:text-3xl font-bold hover:opacity-80 hover:cursor-pointer">Evolution of the world wide web (www)</h1>
                    <p className="text-zinc-700 text-lg lg:text-xl hover:opacity-80 hover:cursor-pointer">What is the Internet? The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. The most common part of the internet used today is the web.</p>
                </div>
                <div className="flex items-center space-x-1">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101136903%2Fg0HwoLyO7.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                    className="w-12 h-12 rounded-full hover:cursor-pointer"
                  />
                  <div className="flex flex-col hover:cursor-pointer">
                    <div className="text-zinc-800 font-bold text-lg hover:cursor-pointer">Victor Omorogbe</div>
                    <div className="flex space-x-1">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-base text-zinc-800">4 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-0 lg:max-w-64">
                <div className="flex flex-col">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1653408769102%2FH0nI8WBYy.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                    className="w-full h-40 rounded-lg hover:opacity-80 hover:cursor-pointer" />
                    <h1 className="text-zinc-800 text-xl font-bold hover:opacity-80 hover:cursor-pointer">How To Get Started With Tailwindcss</h1>
                    <div className="flex items-center space-x-1">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101136903%2Fg0HwoLyO7.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                    className="w-12 h-12 rounded-full hover:cursor-pointer"
                  />
                  <div className="flex flex-col hover:cursor-pointer">
                    <div className="text-zinc-800 font-bold text-lg hover:cursor-pointer">Victor Omorogbe</div>
                    <div className="flex space-x-1">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-base text-zinc-800">2 mins read</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1653408769102%2FH0nI8WBYy.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                    className="w-full h-40 rounded-lg hover:opacity-80 hover:cursor-pointer" />
                    <h1 className="text-zinc-800 text-xl font-bold hover:opacity-80 hover:cursor-pointer">How To Get Started With Tailwindcss</h1>
                    <div className="flex items-center space-x-1">
                  <img
                    src="https://vstudio.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658101136903%2Fg0HwoLyO7.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                    className="w-12 h-12 rounded-full hover:cursor-pointer"
                  />
                  <div className="flex flex-col hover:cursor-pointer">
                    <div className="text-zinc-800 font-bold text-lg hover:cursor-pointer">Victor Omorogbe</div>
                    <div className="flex space-x-1">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-base text-zinc-800">2 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 p-10 flex flex-col space-y-5">
        <h3 className="text-zinc-700 flex justify-center font-semibold">©2022 Supreme Labs</h3>
        <div className="flex space-x-5 text-zinc-700 justify-center items-center">
          <a href="/" className="underline text-zinc-700">Archive</a>
          <div className="text-4xl">·</div>
          <a href="/" className="underline text-zinc-700">Privacy policy</a>
          <div className="text-4xl">·</div>
          <a href="/" className="underline text-zinc-700">Terms</a>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center space-x-2 border-2 hover:border-zinc-500 p-4 rounded-lg">
            <img src="/logo.png" className="w-6 h-6" />
            <h3 className="text-zinc-800 font-semibold">Published with hashnode</h3>
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-zinc-800 font-semibold">Powered by <a href="/" className="underline">Hashnode</a> - a blogging community for software developers.</p>
        </div>
      </div>
    </div>
  )
}
