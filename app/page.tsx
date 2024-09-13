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
          scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between p-4">
            <Link
              href="/"
              className="text-red-300 hover:text-red-600 transition-colors"
            >
              Yikvot
            </Link>
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
                  href="/books"
                  className="text-white transition-colors text-xl font-bold hover:text-red-600"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white transition-colors text-xl font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white transition-colors text-xl font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-400"></div>
          <div className="absolute inset-0 opacity-20">
            <ChinarPattern />
          </div>
          <div className="container mx-auto px-4 z-10 mt-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Discover Kashmir's Literary Treasures
                </h1>
                <p className="text-2xl md:text-2xl mb-8 max-w-lg">
                  Explore our vast archive of Kashmiri books and manuscripts,
                  preserving centuries of cultural heritage.
                </p>
                <Button className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors text-lg xl:p-8  p-6 rounded-full">
                  Explore Books
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="md:w-1/2 mt-12 md:mt-0">
                <AnimatedLeaf />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              The Kashmir Literary Archive is dedicated to preserving and
              sharing the rich literary traditions of Kashmir. Our digital
              collection makes centuries of Kashmiri literature accessible to
              readers and researchers worldwide, fostering a deeper
              understanding and appreciation of Kashmir's cultural heritage.
            </p>
          </div>
        </section>

        <section className="py-24 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
              Featured Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((book) => (
                <div
                  key={book}
                  className="bg-red-300 p-8 rounded-2xl shadow-lg transition-transform hover:scale-105"
                >
                  <div className="w-40 h-56 bg-gradient-to-br from-red-200 to-red-300 mx-auto mb-6 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-semibold text-red-800 mb-4">
                    Kashmiri Classic {book}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A timeless piece of Kashmiri literature that captures the
                    essence of the region's culture and history.
                  </p>
                  <Button variant="outline" className="w-full rounded-full">
                    Read More
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button className="bg-red-800 text-white hover:bg-red-700 transition-colors text-lg px-8 py-3 rounded-full">
                View All Books
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
              Search Our Archive
            </h2>
            <div className="max-w-3xl mx-auto flex">
              <Input
                type="search"
                placeholder="Search for books, authors, or topics"
                className="flex-grow text-lg py-6 rounded-l-full"
              />
              <Button className="bg-red-800 text-white hover:bg-red-700 transition-colors text-lg px-8 rounded-r-full h-full">
                <Search className="w-5 h-full mr-2" />
                Search
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                Kashmir Literary Archive
              </h3>
              <p className="text-red-200">
                Preserving the literary heritage of Kashmir
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
            © {new Date().getFullYear()} Kashmir Literary Archive. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChinarPattern() {
  return (
    <svg width="100%" height="100%">
      <pattern
        id="chinarPattern"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0,50 Q25,0 50,50 T100,50"
          fill="none"
          stroke="#FFF"
          strokeWidth="1"
          opacity="0.2"
        />
        <path
          d="M0,0 Q25,50 50,0 T100,0"
          fill="none"
          stroke="#FFF"
          strokeWidth="1"
          opacity="0.2"
        />
        <path
          d="M0,100 Q25,50 50,100 T100,100"
          fill="none"
          stroke="#FFF"
          strokeWidth="1"
          opacity="0.2"
        />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#chinarPattern)" />
    </svg>
  );
}

function AnimatedLeaf() {
  return (
    <svg
      className="w-full h-auto max-w-md mx-auto animate-float"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 20C60 20 20 60 20 100C20 140 60 180 100 180C140 180 180 140 180 100C180 60 140 20 100 20ZM100 160C70 160 40 130 40 100C40 70 70 40 100 40C130 40 160 70 160 100C160 130 130 160 100 160Z"
        fill="#4CAF50"
      />
      <path
        d="M100 40C70 40 40 70 40 100C40 130 70 160 100 160C130 160 160 130 160 100C160 70 130 40 100 40ZM100 140C80 140 60 120 60 100C60 80 80 60 100 60C120 60 140 80 140 100C140 120 120 140 100 140Z"
        fill="#81C784"
      />
      <path
        d="M100 60C80 60 60 80 60 100C60 120 80 140 100 140C120 140 140 120 140 100C140 80 120 60 100 60ZM100 120C90 120 80 110 80 100C80 90 90 80 100 80C110 80 120 90 120 100C120 110 110 120 100 120Z"
        fill="#C8E6C9"
      />
      <path d="M100 20V180M20 100H180" stroke="#4CAF50" strokeWidth="2" />
    </svg>
  );
}
