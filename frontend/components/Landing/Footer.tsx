// Copyright (c) 2022 Nikhil Akki
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Image from "next/image";
import Link from "next/link";



const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="#top"><a className="flex items-center">
                                <Image src="/logo.png" className="mr-3 h-8" alt="urlshortr Logo" width="20%" height="20%" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Back to top</span>
                            </a></Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <Link href="https://linkedin.com/in/nikhilakki/"><a className="hover:underline">LinkedIn</a></Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/akkiyogi"><a className="hover:underline ">Twitter</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <Link href="/privacy"><a className="hover:underline">Privacy Policy</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/tos"><a className="hover:underline">Terms &amp; Conditions</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://nikhilakki.in/about" target="_blank" rel="norefferer noreferrer" className="hover:underline">Nikhil Akki</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://twitter.com/akkiyogi" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="https://github.com/nikhilakki" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://linkedin.com/in/nikhilakki" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>                        </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;