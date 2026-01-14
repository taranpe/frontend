"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">

      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pandit Logo"
              width={160}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 border rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search product"
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button className="px-4 bg-gray-100 hover:bg-gray-200 transition">
              <Search size={20} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">

            {/* Login */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-1 hover:text-orange-500 transition"
            >
              <User size={20} />
              Login
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden md:flex items-center gap-1 border border-pink-500 text-pink-500 px-3 py-1 rounded hover:bg-pink-50 transition"
            >
              <Heart size={18} />
              Wishlist
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative hover:text-orange-500 transition">
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search product"
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button className="px-4 bg-gray-100 hover:bg-gray-200 transition">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bg-[#B65522]">
        <nav className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Desktop Menu – CENTERED */}
          <ul className="hidden md:flex justify-center gap-8 text-white py-3 text-sm font-medium">
            <li><Link href="/buy-1-get-1" className="hover:text-gray-200 transition">Products</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Services</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Consultancy</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Horoscope</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Free Remedy Calculator</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Courses</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Membership Plans</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">About Us</Link></li>
            <li><Link href="#" className="hover:text-gray-200 transition">Blog</Link></li>
          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-4 text-white py-4 text-sm font-medium">
              <li><Link href="/buy-1-get-1">Products</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Consultancy</Link></li>
              <li><Link href="#">Horoscope</Link></li>
              <li><Link href="#">Free Remedy Calculator</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Membership Plans</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          )}
        </nav>
      </div>

    </header>
  );
}
