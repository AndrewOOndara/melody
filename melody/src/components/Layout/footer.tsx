import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
<<<<<<< HEAD
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section: Join the Newsletter */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <img
              src="/melody_logo.png"
              alt="Melody Logo"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">
              Join our newsletter to stay up to date on features and releases
            </h3>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <div className="flex items-center gap-2">
=======
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left Section: Join the Newsletter */}
                    <div className="w-full md:w-2/5 mb-8 md:mb-0">
                        <Image
                            src="/melody_logo.png"
                            alt="Melody Logo"
                            width={64} // Adjust width
                            height={64} // Adjust height
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-4">
                            Join our newsletter to stay up to date on features and releases
                        </h3>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Your Email
                            </label>
                            <div className="flex items-center gap-2">
                                {/* Input field can be added here */}
                            </div>
                            <p className="text-sm text-gray-400">
                                By subscribing, you agree to our Privacy Policy and provide
                                consent to receive updates from Melody.
                            </p>
                        </div>
                    </div>
>>>>>>> 12e47d091f76f8d06fb6aa4b7e0cb5cee3f722f5

                    {/* Right Section: Links */}
                    <div className="flex flex-col md:flex-row w-full md:w-3/5 space-y-8 md:space-y-0 md:space-x-16 justify-end text-right">
                        {/* Main Menu */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Main Menu</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-400">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-400">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-400">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-400">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Personal */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Personal</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/profile" className="text-gray-400">
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/orders" className="text-gray-400">
                                        My Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/wishlist" className="text-gray-400">
                                        Wishlist
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="https://facebook.com"
                                        className="text-gray-400 flex items-center"
                                    >
                                        <FaFacebook className="mr-2" />
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://instagram.com"
                                        className="text-gray-400 flex items-center"
                                    >
                                        <FaInstagram className="mr-2" />
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://twitter.com"
                                        className="text-gray-400 flex items-center"
                                    >
                                        <FaTwitter className="mr-2" />
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://linkedin.com"
                                        className="text-gray-400 flex items-center"
                                    >
                                        <FaLinkedin className="mr-2" />
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Melody. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
