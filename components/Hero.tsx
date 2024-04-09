import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 xl:flex-row">
      <div className="hero-map"></div>
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          nostrum ex assumenda et architecto aliquid asperiores tenetur ullam,
          mollitia, voluptates expedita, delectus veniam unde error quaerat!
          Consequatur suscipit nisi labore?
        </p>
        <div className="my-11 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              title="Download App"
              icon=""
              variant="btn_green"
            />
            <Button
              type="button"
              title="How we work?"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
