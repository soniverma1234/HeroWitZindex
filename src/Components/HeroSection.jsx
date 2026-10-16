import girl from "../assets/girl.png";
import boy from "../assets/boy.png";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">

        <div>
          <p className="mb-3 text-xs font-semibold text-blue-600">
            NEW COLECTION</p>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl">
               Stylish Fashion <br /> For Every You
            </h1>

            <p className="mt-6 max-w-md text-lg text-gray-600">
              Discover the latest trends in clothing, footwear and accessories.</p>

              <div className="mt-8 flex gap-4">

                <button className="rounded-lg bg-blue-600 px-3 py-3 text-lg font-medium text-white hover:bg-blue-900">Shop Now</button>
                <button  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100">View Collection</button>

              </div>
        </div>
        <img src={boy} alt="Boy model"
        className="absolute left-[35%] top-[10%] z-10 h-[70%] w-[48%] rounded-3xl object-contain  pt-4 " />
       <img src={girl}
            alt="Girl model"
            className="absolute right-0 top-[22%] z-20 h-[68%] w-[52%] rounded-3xl object-contain  pt-4 shadow-lg"
          />
         
      </div>
    </section>
  )
}

export default HeroSection;
