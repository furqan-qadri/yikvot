"use client";

import { useState, useEffect } from "react";
import { BookOpen, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 80 ? "bg-[#ED4141] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <nav className="flex items-center justify-between p-4">
            <Link
              href="/"
              className="text-white transition-colors text-2xl xl:text-3xl font-bold hover:text-red-600"
            >
              Yikvot
            </Link>
            <div>
              <ul className="flex space-x-8">
                {/* <li>
                <Link
                  href="/"
                  className="text-red-800 hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li> */}
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors text-lg xl:text-xl font-bold hover:text-red-600"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white transition-colors text-lg xl:text-xl font-bold"
                  >
                    About
                  </Link>
                </li>
                <li className=" hidden">
                  <Link
                    href="/contact"
                    className="text-white transition-colors text-xl font-bold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-400"></div>
          <div className="container mx-auto px-4 z-10 mt-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-white">
                <div className="xl:text-7xl text-5xl font-bold mb-6 leading-tight mt-8">
                  Discover Kashmir&apos;s Literary Treasures
                </div>
                <div className="block md:hidden mt-8">
                  <img
                    src="/leaf.webp"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-2xl md:text-2xl mb-8 max-w-lg mt-8">
                  Explore our vast archive of Kashmiri books and manuscripts,
                  preserving centuries of cultural heritage.
                </p>
                <Button className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors text-lg xl:p-8 p-6 rounded-full mb-8">
                  Explore Books
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              {/* Desktop image placement remains unchanged */}
              <div className="md:w-1/2 mt-12 md:mt-0 hidden md:block">
                <img
                  src="/leaf.webp"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              Yikvot is dedicated to preserving and sharing the rich literary
              traditions of Kashmir. Our digital collection makes centuries of
              Kashmiri literature accessible to readers and researchers
              worldwide, fostering a deeper understanding and appreciation of
              Kashmir&apos;s cultural heritage.
            </p>
          </div>
        </section>

        <section className="pb-16 pt-4 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
              Featured Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((book) => (
                <div
                  key={book}
                  className="bg-gradient-to-br from-red-100 to-red-300 p-8 rounded-xl shadow-lg transition-transform hover:scale-105 relative border-l-8 border-red-600"
                >
                  {/* Book Cover Area */}
                  <div className="w-40 h-56 bg-red-500 mx-auto mb-6 rounded-sm flex items-center justify-center shadow-lg border-l-4 border-red-700 relative">
                    <BookOpen className="w-20 h-20 text-white" />
                  </div>

                  {/* Book Title */}
                  <h3 className="text-3xl font-bold text-red-800 mb-4 tracking-wide">
                    Kashmiri Classic {book}
                  </h3>

                  {/* Book Description */}
                  <p className="text-gray-700 italic mb-6">
                    A timeless piece of Kashmiri literature that captures the
                    essence of the region&apos;s culture and history.
                  </p>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Read More
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors text-lg xl:p-8 p-6 rounded-full">
                Explore all books
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="pt-4 pb-16 bg-red-50">
          <div className="mx-auto px-4">
            <div className="text-4xl font-bold text-[#ED4141] mb-12 text-center">
              Search Our Archive
            </div>
            <div className="max-w-3xl mx-auto flex h-16">
              <Input
                type="search"
                placeholder="Search for books, authors, or topics"
                className="h-full w-4/5 rounded-l-full"
              />
              <Button className="bg-[#ED4141] text-white hover:bg-red-700 transition-colors text-lg rounded-r-full h-full w-1/5">
                <Search className="h-full mr-2" />
                {/* Search */}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Yikvot</h3>
              <p className="text-red-200">
                Preserving the literary heritage of Kashmir <br /> <br />
                #KaeshirSeetiKasehirSaeri
              </p>
            </div>
            <nav className="mb-8">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-red-200 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-red-200 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-red-200 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-red-800 text-center text-sm text-red-200">
            Made with ♥️ in Kashmir <br /> © {new Date().getFullYear()} Yikvot.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
