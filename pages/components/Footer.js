import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="footer bg-gray-800 relative pt-1 px-3">
            <div className="container mx-auto sm:px-3 xl:px-8 lg:px-8 md:px-8">
                <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className=" space-y-3 border-1 rounded-xl ">
                        <Image
                            src="/assets/images/logo-2.png"
                            width={250}
                            height={85}
                            alt="Logo"
                        />
                        <p className="text-white font-bold text-xl py-2 md:p-1">
                            An Innovation-Driven Company
                        </p>
                        <p className="text-white">
                            We At Fineax As A Home For Creative Minds And Family Of Wonderful
                            People. We Believe, Respect, And See The Vision Can Support An
                            Idea And Make It A Reality.
                        </p>
                        
                    </div>
                    <div className=" px-0  border-1 rounded-xl  lg:text-center ">
                        <h1 className="text-2xl font-bold text-white capitalize  px-2">
                            Menu
                        </h1>

                        <ul className="">
                            <li className="text-white py-3">
                                <Link href="/services" className="cursor-pointer"> Services</Link>
                            </li>                           
                            <li className="text-white py-3">
                                <Link href="/about" className="cursor-pointer">About Us</Link>
                            </li>
                            <li className="text-white py-3">
                                <Link href="/contact" className="cursor-pointer">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" space-y-2 sm:p-1">
                        <h1 className="text-2xl font-bold text-white capitalize ">
                           Contact Us
                        </h1>
                        <p className=' text-xl text-white'><a href='tel:'>+911234567890</a></p>
                        <p className=' text-xl text-white'><a href='mailto:'>testiung@gmail.com</a></p>
                        <div className="d-flex pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#"
                                className="mr-5"
                            >
                                <Image
                                    src="/assets/images/social/instagram.svg"
                                    width={30}
                                    height={30}
                                    alt="Instagram"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#"
                                className="mx-5"
                            >
                                <Image
                                    src="/assets/images/social/linkedin.svg"
                                    width={30}
                                    height={30}
                                    alt="Linkedin"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#"
                                className="mx-5"
                            >
                                <Image
                                    src="/assets/images/social/facebook.svg"
                                    width={30}
                                    height={30}
                                    alt="Facebook"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#"
                                className="mx-5"
                            >
                                <Image
                                    src="/assets/images/social/pinterest.svg"
                                    width={30}
                                    height={30}
                                    alt="Pinterest"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="mt-5 flex flex-col">
                    <div className="sm:w-2/3 text-left py-6">
                        <p className="text-md text-white font-normal mb-2 tracking-wider">
                            © Copyright Fineax 2020
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
