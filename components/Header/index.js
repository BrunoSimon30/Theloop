"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 absolute px-6 md:px-28 py-6 z-20">
      <div className="flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex menu">
          <ul className="flex gap-8">
            <Link className="text-xl font-medium" href="/">
              Home
            </Link>
            <Link className="text-xl font-medium" href="/about">
              About
            </Link>
            <Link className="text-xl font-medium" href="/services">
              Services
            </Link>
          </ul>
        </div>

        {/* Logo */}
        <div className="logo-wrap">
          <Link href="/">
            <img src="/img/logo.svg" alt="Logo"  />
          </Link>
        </div>

        {/* Mail */}
        <div className="hidden md:flex mail-wrap">
          <Link
            href="/"
            className="text-xl font-medium flex gap-2 items-center"
          >
            <img className="w-6 rotate-180" src="/img/tr.svg" />
            <span>hello@thelogoName.com</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl z-30"
          onClick={() => setMenuOpen(true)}
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col gap-8 px-8 mt-12 text-lg font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="flex gap-2 items-center pt-6">
              <img className="w-6 rotate-180" src="/img/tr.svg" />
              hello@thelogoName.com
            </div>
          </Link>
        </nav>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
