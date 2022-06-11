import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";



const navigation = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Services", href: "/services" },
    { id: 3, name: "About us", href: "/about" },
    { id: 4, name: "Contact us", href: "/contact" },
];



const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const router = useRouter();
    return (

        <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 animate-none z-50 mb-0">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <Link href="/">
                        <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                            <Image src="/assets/images/logo.svg" width={400} height={35}/>
                        </a>
                        </Link>
                    </div> 
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="items-center md:flex hidden">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {navigation.map((item) =>(
                            <Link key={item.id} href={item.href}>
                        <a className={`my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0${router.pathname === item.href ? "font-bold text-2xl underline underline-offset-4" : ""}`}>{item.name}</a>
                            </Link>
                        ))}
                    </div>
                  
                </div>
            </div>
        </nav>
    );
};

export default NavBar;