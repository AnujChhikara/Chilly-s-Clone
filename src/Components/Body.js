import Reviews from "./MainBody/Reviews";
function Body() {
  return (
    <div>
      <div className="marquee">
        <div className="track">
          <div className="flex">
            <h2 className="text-[90px] mr-2 ">
              A
              <span className="content pl-4 pr-[490px]">
                <span>Reuseable</span>
                <span>Reuseable</span>
              </span>
              Way Of Living.
            </h2>
            <h2 className="text-[90px] mr-2 ">
              A
              <span className="content pl-4 pr-[490px]">
                <span>Reuseable</span>
                <span>Reuseable</span>
              </span>
              Way Of Living.
            </h2>
            <h2 className="text-[90px] mr-2 ">
              A
              <span className="content pl-4 pr-[490px]">
                <span>Reuseable</span>
                <span>Reuseable</span>
              </span>
              Way Of Living.
            </h2>
            <h2 className="text-[90px] mr-2 ">
              A
              <span className="content pl-4 pr-[490px]">
                <span>Reuseable</span>
                <span>Reuseable</span>
              </span>
              Way Of Living.
            </h2>
            <h2 className="text-[90px] mr-2 ">
              A
              <span className="content pl-4 pr-[490px]">
                <span>Reuseable</span>
                <span>Reuseable</span>
              </span>
              Way Of Living.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col w-72 space-y-6 mr-40">
          <h2 className="text-7xl text-black">Series 2</h2>
          <h3 className="text-sm">
            Three years of design, re-engineered from the base up.
          </h3>
          <button className="bg-black text-white text-xl w-40 py-3 rounded-3xl">
            SHOP NOW
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1647257095-s2headergradient.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt=""
          />
          <h3 className="text-lg">BOTTLES</h3>
          <p className="text-sm text-gray-500">from $25</p>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1644498845-s2coffee_libertyblush.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt="poster"
          />
          <h3 className="text-lg">COFFEE CUPS</h3>
          <p className="text-sm text-gray-500">from $30</p>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1605030422-s2accessories.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt=""
          />
          <h3 className="text-lg">ACCESSORIES</h3>
          <p className="text-sm text-gray-500">
            Compatible with Series 2 products
          </p>
        </div>
      </div>
      {/* the originals */}
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col w-72 space-y-6 mr-40">
          <h2 className="text-7xl pop text-black">The Original</h2>
          <h3 className="text-sm">The original Chilly's experience</h3>
          <button className="bg-black text-white text-xl w-40 py-3 rounded-3xl">
            SHOP NOW
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1644929354-original_bottles_sporttile.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt=""
          />
          <h3 className="text-lg">BOTTLES</h3>
          <p className="text-sm text-gray-500">from $15</p>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1615372282-originalcoffee.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt=""
          />
          <h3 className="text-lg">COFFEE CUPS</h3>
          <p className="text-sm text-gray-500">from $20</p>
        </div>
        <div className="flex flex-col justify-center items-center w-60">
          <img
            className="w-36"
            src="https://www.datocms-assets.com/11645/1639394198-oriaccessoriessl.png?q=80&auto=format&dpr=1&w=320&fit=crop"
            alt=""
          />
          <h3 className="text-lg">ACCESSORIES</h3>
          <p className="text-sm text-gray-500">
            Compatible with Original Products
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col space-y-20 mt-44">
        {/* first set */}
        <div className="flex justify-center  items-center space-x-10">
          <div className="w-[500px] h-[500px] bg-first rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-4xl text-white">The Story of Series 2</h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              FIND OUT MORE
            </button>
          </div>
          <div className="w-[500px] h-[500px] bg-second rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-4xl w-60 text-white">
              Chilly's Studio Collection
            </h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>
        {/* second set */}
        <div className="flex justify-center items-center space-x-10">
          <div className="w-[500px] h-[500px] bg-third rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-4xl text-white">The Journal</h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              READ MORE
            </button>
          </div>
          <div className="w-[500px] h-[500px] bg-fourth rounded-lg flex flex-col justify-center  space-y-4 items-center">
            <h3 className="text-4xl text-white">Gift Responsibly</h3>
            <button className="text-sm bg-white px-4 py-3 rounded-3xl hover:-translate-y-0.5 duration-700 shadow-md">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <Reviews />
     
    </div>
  );
}
export default Body;
