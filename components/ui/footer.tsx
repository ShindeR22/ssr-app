// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
        return (
                <footer className="bg-gray-900 text-white py-8">
                        <div className="container mx-auto px-4">
                                {/* Grid columns */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                        {/* Column 1: About Us */}
                                        <div>
                                                <h3 className="font-bold mb-4">About Us</h3>
                                                <ul className="space-y-2">
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Our Story
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Team
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Careers
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                        {/* Column 2: Services */}
                                        <div>
                                                <h3 className="font-bold mb-4">Services</h3>
                                                <ul className="space-y-2">
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Consulting
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Sales
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Support
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                        {/* Column 3: Resources */}
                                        <div>
                                                <h3 className="font-bold mb-4">Resources</h3>
                                                <ul className="space-y-2">
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Blog
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Help Center
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#" className="hover:underline">
                                                                        Privacy Policy
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                        {/* Column 4: Contact */}
                                        <div>
                                                <h3 className="font-bold mb-4">Contact</h3>
                                                <ul className="space-y-2">
                                                        <li>
                                                                <a href="mailto:support@example.com" className="hover:underline">
                                                                        support@example.com
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="tel:+123456789" className="hover:underline">
                                                                        +1 (234) 567-89
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                                {/* Bottom section */}
                                <div className="mt-8 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row md:justify-between md:items-center">
                                        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
                                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                                <a href="#" className="hover:underline">
                                                        Terms
                                                </a>
                                                <a href="#" className="hover:underline">
                                                        Privacy
                                                </a>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
};

export default Footer;
