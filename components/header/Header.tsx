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

          {/* ===== DESKTOP SEARCH (EXACT IMAGE STYLE) ===== */}
          <div className="hidden md:flex flex-1 max-w-[420px] mx-6">
            <div className="flex w-full border border-gray-200 rounded-md overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Search product"
                className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button className="w-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
                <Search size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">

            {/* Login */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-1 hover:text-[#A35013] transition"
            >
              <User size={20} />
              Login
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden md:flex items-center gap-1 border border-[#A35013] text-[#A35013] px-3 py-1 rounded hover:bg-[#A35013]/10 transition"
            >
              <Heart size={18} />
              Wishlist
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative hover:text-[#A35013] transition">
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-[#A35013] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* ===== MOBILE SEARCH (SAME STYLE) ===== */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search product"
              className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button className="w-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
              <Search size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bg-[#A35013]">
        <nav className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center gap-8 text-white py-3 text-sm font-medium">
            <li><Link href="/buy-1-get-1" className="hover:text-[#f2c94c] transition">Products</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Services</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Consultancy</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Horoscope</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Free Remedy Calculator</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Courses</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Membership Plans</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">About Us</Link></li>
            <li><Link href="#" className="hover:text-[#f2c94c] transition">Blog</Link></li>
          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-4 py-4 text-sm font-medium text-white bg-[#A35013]">
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
