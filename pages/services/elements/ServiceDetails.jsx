import Link from "next/link";

const ServiceDetails = (props) => {
  return (
    <div className="bg-gray-900">
      <div className="px-4  mx-auto  md:px-24 lg:px-8 lg:py-20 container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl sm:leading-none">
                {props.heading}
                <br className="hidden md:block" />
                {props.heading1}
                <span className="inline-block text-deep-purple-accent-400"></span>
              </h2>
              <p className="text-base text-gray-100 md:text-lg">
                {props.description}
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={props.img1}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={props.img2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={props.img3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
