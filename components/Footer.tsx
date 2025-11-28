import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    return (
<footer className="bg-black text-white border-t border-gray-800 mt-12">
            <div className="container mx-auto px-4 py-8">

                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">

                 
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">Print Ads</h3>
                        <ul className="space-y-2">
                            <li><Link href="/print-ads" className="text-gray-200 text-sm hover:text-white">HT Media</Link></li>
                            <li><Link href="/classifieds" className="text-gray-200 text-sm hover:text-white">Classifieds</Link></li>
                            <li><Link href="/book-print-ads" className="text-gray-200 text-sm hover:text-white">Book Print Ads</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">Popular</h3>
                        <ul className="space-y-2">
                            <li><Link href="/india-news" className="text-gray-200 text-sm hover:text-white">India News</Link></li>
                            <li><Link href="/world-news" className="text-gray-200 text-sm hover:text-white">World News</Link></li>
                            <li><Link href="/cricket" className="text-gray-200 text-sm hover:text-white">Cricket</Link></li>
                            <li><Link href="/lifestyle" className="text-gray-200 text-sm hover:text-white">Lifestyle</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">Cities</h3>
                        <ul className="space-y-2">
                            <li><Link href="/cities/delhi" className="text-gray-200 text-sm hover:text-white">Delhi</Link></li>
                            <li><Link href="/cities/mumbai" className="text-gray-200 text-sm hover:text-white">Mumbai</Link></li>
                            <li><Link href="/cities/bangalore" className="text-gray-200 text-sm hover:text-white">Bangalore</Link></li>
                            <li><Link href="/cities/kolkata" className="text-gray-200 text-sm hover:text-white">Kolkata</Link></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">Entertainment</h3>
                        <ul className="space-y-2">
                            <li><Link href="/entertainment/bollywood" className="text-gray-200 text-sm hover:text-white">Bollywood</Link></li>
                            <li><Link href="/entertainment/hollywood" className="text-gray-200 text-sm hover:text-white">Hollywood</Link></li>
                            <li><Link href="/entertainment/tv" className="text-gray-200 text-sm hover:text-white">TV</Link></li>
                            <li><Link href="/entertainment/music" className="text-gray-200 text-sm hover:text-white">Music</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">More</h3>
                        <ul className="space-y-2">
                            <li><Link href="/education" className="text-gray-200 text-sm hover:text-white">Education</Link></li>
                            <li><Link href="/business" className="text-gray-200 text-sm hover:text-white">Business</Link></li>
                            <li><Link href="/astrology" className="text-gray-200 text-sm hover:text-white">Astrology</Link></li>
                            <li><Link href="/web-stories" className="text-gray-200 text-sm hover:text-white">Web Stories</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-bold text-white mb-3 text-sm uppercase">About Us</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-200 text-sm hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-200 text-sm hover:text-white">Contact Us</Link></li>
                            <li><Link href="/privacy" className="text-gray-200 text-sm hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-200 text-sm hover:text-white">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="border-t border-[#3b1f14] pt-6 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-white">Follow Us:</span>
                            <div className="flex gap-3">
                                <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
                                    <Facebook size={20} />
                                </Link>
                                <Link href="https://twitter.com" target="_blank" className="hover:text-sky-400">
                                    <Twitter size={20} />
                                </Link>
                                <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-500">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="https://youtube.com" target="_blank" className="hover:text-red-500">
                                    <Youtube size={20} />
                                </Link>
                            </div>
                        </div>

                        <Link href="/download-app" className="px-4 py-2 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800">
                            Download App
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#0c0c0c] pt-6 text-center">
                    <p className="text-xs text-gray-300">
                        © {new Date().getFullYear()} Live Hindustan Clone AST. All rights reserved. Powered by HT Digital Streams Ltd.
                    </p>
                </div>
            </div>
        </footer>
    );
}
