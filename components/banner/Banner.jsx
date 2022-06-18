import Link from "next/link";
const Banner = (props) => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full bg-gray-900 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-10 lg:mb-0 lg:max-w-xl lg:pr-5">
          <div className="max-w-2xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight uppercase text-gray-100 sm:text-4xl sm:leading-none max-w-lg mb-6">
              {props.title}
              <br className="hidden md:block"/>

              <span className="inline-block text-deep-purple-accent-400"></span>
            </h2>
            <p className="text-zinc-100 text-base md:text-lg italic ">
              {props.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-5/5">
            <img className="object-cover" src={props.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
