import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const footerNavs = [
    {
      id: 1,
      href: "/about",
      name: "About",
    },
    {
      id: 2,
      href: "/services",
      name: "Services",
    },

    {
      id: 3,
      href: "/contact",
      name: "Contact Us",
    },
  ];

  return (
    <footer className="text-white bg-gray-800 px-4 py-5  mx-auto">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image
          src="/assets/images/logo-white.png"
          width={300}
          height={70}
          alt="Fineax"
          className="w-32 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px]">
        Fineax is one stop problem solving in artificial intelligence and machine learning          systematically through a range of possible actions in order to reduce the distance of your predefined goal or solution. Our team is skilled through most efficient search strategies andplanning an advanced problem-solving technique through training and practice and are best at finding good solutions to the competitions.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item) => (
          <li key={item.id} className="hover:text-zinc-300 hover:underline">
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Fineax All rights reserved developed by &nbsp;
          <Link href="https://manish.trapo.in/">
            <a className="hover:text-blue-500">Manish Shaw</a>
          </Link>
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <img src="/assets/images/social/pinterest.svg" alt="pinterest" />
              </a>
            </li>

            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <img src="/assets/images/social/linkedin.svg" alt="linkedin" />
              </a>
            </li>

            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <img src="/assets/images/social/instagram.svg" alt="instagram" />
              </a>
            </li>

            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <img src="/assets/images/social/facebook.svg" alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
